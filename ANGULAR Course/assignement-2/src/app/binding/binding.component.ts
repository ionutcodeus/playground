import { Component } from '@angular/core'

@Component({
    selector: 'binding-app',
    templateUrl : './binding.component.html',
    styleUrls : ['./binding.component.css']   
})

export class BindingComponent {
    propertyName= 'Ionut';
    
    emptyString() {
        return this.propertyName='';
    }
}