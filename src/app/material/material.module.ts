import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,MatTableModule,MatToolbarModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,MatButtonModule,MatCardModule,MatDialogModule,MatTableModule,MatToolbarModule,MatInputModule
  ],
  exports:[
    CommonModule,MatButtonModule,MatCardModule,MatDialogModule,MatTableModule,MatToolbarModule,MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
