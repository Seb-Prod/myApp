import { Component, computed, inject, model, OnInit } from '@angular/core';
import { EtapeComponent } from '../../../etapes/components/etape/etape.component';
import { GestionFichierComponent } from '../../../gestionFichier/components/gestion-fichier/gestion-fichier.component';
import { GestionFichierHelpComponent } from '../../../gestionFichier/components/gestion-fichier-help/gestion-fichier-help.component';
import { GestionExportComponent } from '../../../gestionFichier/components/gestion-export/gestion-export.component';
import { GestionImportComponent } from '../../../gestionFichier/components/gestion-import/gestion-import.component';
import { ProgrammeService } from '../../../shared/services/programme.service';
import { ParamComponent } from '../../../param/components/param/param.component';
import { Action, Param } from '../../../shared/models/programme.model';
import { ActionComponent } from '../../../actions/components/action/action.component';
import { ActionSupprimeComponent } from '../../../actions/components/action-supprime/action-supprime.component';
import { TransitionComponent } from '../../../transitions/components/transition/transition.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EtapeComponent, GestionFichierComponent, GestionFichierHelpComponent, GestionExportComponent, GestionImportComponent, ParamComponent, ActionComponent, ActionSupprimeComponent, TransitionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    //this.activePage.set("action")
    //this.previousPage.set("etapes")
    //console.log(this.programme);
  }


  activePage = model<string>("etapes");
  previousPage = model<string>("etapes");

  programme = inject(ProgrammeService);
  stepIndex = model<number>(1);
  stepIndexTransition = model<number>(1);
  actionIndex = model<number>(1);

  progName = model<string>(this.programme.programme.param.name);
  progCode = model<number>(this.programme.programme.param.code);

  onClickCommandButton(myCommande: string) {
    console.log(myCommande)
    switch (myCommande) {
      case 'back':
        this.activePage.set(this.previousPage())
        break;
      case 'actionSupprime':
        this.delAction();
        break;
      case 'save':
        this.programme.save();
        break;
        case 'initial':
          this.stepIndexTransition.set(0);
          this.activePage.set('transition');
          break;
        case 'transition':
          this.stepIndexTransition.set(this.stepIndex());
          this.activePage.set('transition');
          break;
      default:
        this.previousPage.set(this.activePage());
        this.activePage.set(myCommande);
    }

  }

  onClickActionButton(indexAction: number) {
    this.actionIndex.set(indexAction);
    this.previousPage.set(this.activePage());
    this.activePage.set('action');
  }

  onValidParam(param: Param) {
    this.programme.programme.param = param;
    this.progName.set(this.programme.programme.param.name)
    this.progCode.set(this.programme.programme.param.code)
    this.activePage.set("etapes");
    console.log(this.programme);
  }

  onValidTransition(){
    this.activePage.set("etapes");
  }

  onClickTransitionButton(){
    this.activePage.set("transition");
  }

  delAction() {
    this.programme.programme.etapes[this.stepIndex() - 1].actions[this.actionIndex() - 1] = new Action();
    this.onClickCommandButton('etapes');
  }

  setAction(newAction: Action) {
    console.log(newAction)
    this.programme.programme.etapes[this.stepIndex() - 1].actions[this.actionIndex() - 1] = new Action(newAction.action)
    console.log(this.programme);
    this.onClickCommandButton('etapes');
  }
}
