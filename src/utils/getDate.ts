import { DateTime } from 'luxon';

export function getDate(): { year: string, hour: string } {
    const date = DateTime.now().setZone('America/Sao_Paulo');
    const year = date.toFormat('dd/MM/yyyy');
    const hour = date.toFormat('HH:mm');
    return { year, hour }
}
