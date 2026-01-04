import { fileURLToPath } from "url";
import * as path from "path";

// Función que retorna __dirname basado en el archivo donde se llame
export function getDirname(metaUrl: string): string {
  const __filename = fileURLToPath(metaUrl);
  return path.dirname(__filename);
}
