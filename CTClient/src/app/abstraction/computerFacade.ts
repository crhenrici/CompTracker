import { Injectable } from '@angular/core';
import { ComputerService } from '../core/computer.service';
import { Computer } from '../model/computer';

@Injectable({
    providedIn: 'root'
})
export class ComputerFacade {

    constructor(private computerService: ComputerService) {}

    public getAllComputers() {
        return this.computerService.findAll();
    }

    public saveComputer(computer: Computer) {
        return this.computerService.save(computer);
    }

    public updateComputer(computer: Computer) {
        return this.computerService.updateData(computer);
    }

    public deleteComputer(id: number) {
        return this.computerService.deleteComputer(id);
    }

}
