import { Component, signal } from '@angular/core';
import { Profile } from './profile/profile'
import { Project } from './project/project'

@Component({
  selector: 'app-root',
  imports: [ Profile, Project ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-basic-portfolio');
}
