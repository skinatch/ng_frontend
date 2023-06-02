/**
 * Que es este módulo o Archivo
 *
 * Descripcion Larga
 *
 * @category     Gestion Documental
 * @package      Orfeo NG 
 * @subpackage   XXXX 
 * @author       Skina Technologies SAS (http://www.skinatech.com)
 * @license      Mixta <https://orfeolibre.org/inicio/licencia-de-orfeo-ng/>
 * @license      LICENSE.md
 * @link         http://www.orfeolibre.org
 * @since        Archivo disponible desde la version 1.0.0
 *
 * @copyright    2023 Skina Technologies SAS
 */

import { TestBed } from '@angular/core/testing';

import { ChangeChildrenService } from './change-children.service';

describe('ChangeChildrenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeChildrenService = TestBed.get(ChangeChildrenService);
    expect(service).toBeTruthy();
  });
});
