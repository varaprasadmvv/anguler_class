import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormComponent } from './form/form.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  branches: string[] = ['eee', 'cse', 'ece', 'mec'];
  selectedBranch: string = ''; //
  result=null;
  firstcompleted:boolean = false;
   constructor(private dilouge:MatDialog,private _snackBar: MatSnackBar,private fb:FormBuilder) {

   }

   personalDetails=this.fb.group({
    firstName: ['',Validators.required]
   })
   contactDetails = this.fb.group({
    mobileNumber: ['',Validators.required]
   })
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  openPopUp(){
    const ref= this.dilouge.open(FormComponent,{
      width: '500px',
      height:  '300px',
      disableClose:true,
      data: {
        'language': 'javascript',
      }
    })
    ref.afterClosed().subscribe(
      
        (data) => {
          console.log(data)
          this.result=data
        }
      
    )
  }
  openSnackBar(): void {
   this._snackBar.openFromComponent( SnackbarComponent)
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  NextStep(){
    this.firstcompleted = true
  }
}
  


