import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { TitreComponent } from '../titre/titre.component';
import { InfoProgrammeComponent } from '../../../shared/components/info-programme/info-programme.component';
import { ImportService } from '../../service/import.service';

@Component({
  selector: 'ecran-gestion-import',
  templateUrl: './gestion-import.component.html',
  styleUrls: ['./gestion-import.component.css'],
  standalone: true,
  imports: [TitreComponent, InfoProgrammeComponent]
})
export class GestionImportComponent {
  @Input() progName:string = "";
  @Input() progCode:number = 0;
  @Output() commandeClicked = new EventEmitter<string>();
  folderName = signal<string>("");
  message = signal<string>("");




  async onFileChange(event: any) {
    const files = event.target.files;

    let temps1: Array<number> = []
    let temps2: Array<number> = []
    let temps3: Array<number> = []
    let temps4: Array<number> = []

    const folderName = files[0].webkitRelativePath.split("/")
    this.folderName.set(folderName[0]);

    if(files.length == 4){
      this.message.set("Lecture du programme en cours, attendre...")
     for(let i = 0 ; i < 4 ; i++){
      switch (files[i].name){
        case "1.BIN":
          await this.readFile(files[i]).then((value) => {
            temps1 = value;
          });
          break;
        case "2.BIN":
          await this.readFile(files[i]).then((value) => {
            temps2 = value;
          });
          break;
        case "3.BIN":
          await this.readFile(files[i]).then((value) => {
            temps3 = value;
          });
          break;
        case "4.BIN":
          await this.readFile(files[i]).then((value) => {
            temps4 = value;
          });
          break;
      }
     }
      
    }else{
      this.message.set("Manque " + (4 - files.length) + " fichier(s)")
    }


    let tableau: Array<number> = []


    tableau = [...temps1, ...temps2, ...temps3, ...temps4];
    if (tableau.length === 4816) {
      this.message.set("Lecture terminée");
      new ImportService(tableau);
      this.commandeClicked.emit("etapes");
    } else {
      this.message.set("Erreur de lecture");
    }
    

  }

  onClick(myAction: string) {
    if (myAction == "etapes") {
      this.commandeClicked.emit("gestionFichier");
    } else {
      this.commandeClicked.emit(myAction);
    }
  }

  private readFile(file: File): Promise<Array<number>> {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const myString = reader.result as string;
        let tab: Array<number> = []

        setTimeout(() => {
          for (let i = 0; i < myString.length; i++) {
            tab.push(myString.charCodeAt(i));
          }
          resolve(tab);
        }, 100)

      }

      // reader.readAsText(file);
      reader.readAsBinaryString(file);
    });
  }
}
