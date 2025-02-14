'use server'
import { sheets } from "@/lib/googleSheets";

export type ApiResponse = { success: boolean, message: string }

const range = 'filtrados!A:J';
// COLUMANS DONDE ESTAN LOS DATOS EN EL SHEET

export const updateDesuscrito = async (id: number): Promise<ApiResponse> => {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    if (!spreadsheetId) throw new Error(`SPREADSHEET_ID no está definido`);

    try {
        // Obtener los datos actuales de la hoja
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values || [];
        if (rows.length === 0) throw new Error(`No se encontraron datos en la hoja.`);

        // Verificar si el ID existe en los datos de la hoja
        const rowExists = rows.some(row => row[0] && parseInt(row[0].toString().trim(), 10) === id);

        if (!rowExists) {
            return { success: false, message: `El ID ${id} no se encontró en la hoja.` };
        }

        // Buscar el ID y verificar si desuscrito ya es 1 antes de actualizar
        let isAlreadyUnsubscribed = false;
        const updatedRows = rows.map(row => {
            if (!row[0]) return row; // Si la fila no tiene ID, la ignoramos
            const rowId = parseInt(row[0].toString().trim(), 10); // Convertir ID de la fila a número

            // Si el ID coincide, verificamos si el valor de desuscrito ya es 1
            if (rowId === id) {
                if (row[2] === "1") {
                    isAlreadyUnsubscribed = true; // Marca como ya desuscrito
                } else {
                    row[2] = "1"; // Cambiar la columna "desuscrito" a 1
                }
            }
            return row;
        });

        // Si ya estaba desuscrito, no realizamos la actualización
        if (isAlreadyUnsubscribed) {
            return { success: false, message: `El ID ${id} ya está desuscrito.` };
        }

        // Enviar actualización a Google Sheets
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: "RAW",
            requestBody: { values: updatedRows },
        });

        // await fetch(`${process.env.DASHBOARD_REVALIDATE}`, { method: 'GET', });

        return { success: true, message: `Se actualizó el valor de desuscrito a 1 para el ID ${id}.` };
    } catch (error) {
        console.error('Error catch: ', error);
        return { success: false, message: "Error al actualizar desuscrito en Google Sheets" };
    }
};

export const updateOpenCount = async (id: number): Promise<ApiResponse> => {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    if (!spreadsheetId) throw new Error(`SPREADSHEET_ID no está definido`);

    // Obtener los datos actuales de la hoja
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    });

    const rows = response.data.values || [];
    if (rows.length === 0) throw new Error(`No se encontraron datos en la hoja.`);

    let rowFound = false;
    let updated = false;

    // Actualizamos el contador de "open" en la columna 4 (índice 3)
    const updatedRows = rows.map((row) => {
        if (!row[0]) return row; // Ignorar filas sin ID
        const rowId = parseInt(row[0].toString().trim(), 10);
        if (rowId === id) {
            rowFound = true;
            const currentOpen = row[3] ? parseInt(row[3].toString().trim(), 10) : 0;
            // row[3] = (currentOpen + 1).toString();
            if (currentOpen === 0) {
                // Solo incrementamos si el valor actual es 0.
                row[3] = (currentOpen + 1).toString();
                updated = true;
            }
        }
        return row;
    });

    if (!rowFound) {
        return { success: false, message: `El ID ${id} no se encontró en la hoja.` };
    }

    if (updated) {
        // Actualizamos la hoja con los nuevos datos
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: "RAW",
            requestBody: { values: updatedRows },
        });
        return { success: true, message: `Se incrementó el contador de open para el ID ${id}.` };
    } else {
        return { success: true, message: `No se actualizó el contador porque ya era distinto de 0 para el ID ${id}.` };
    }
};