import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transforms the value to a comma separated locale value
 * Takes a string or number
 * Usage:
 *   value | localeString
 * Example:
 *   {{ 2343 | localeString }}
 *   formats to: 2,343
 */
@Pipe({
  standalone: true,
  name: 'localeString',
})
export class LocaleStringPipe implements PipeTransform {
  transform(value: string): string {
    return parseInt(value)?.toLocaleString();
  }
}
