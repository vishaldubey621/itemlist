import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list';
  public newTask; 
  public items = []; 
  public add()
  {
    if (this.newTask =='') { 
		} 
		else { 
			this.items.push(this.newTask); 
			this.newTask = ''; 
		} 

  }
   
  public edit(index) { 

    
	} 
	public delete(index) 
	{
    this.items.splice(index, 1); 
    
  	}
}
