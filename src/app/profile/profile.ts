import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NgOptimizedImage],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name: string = 'Samuel Liska';
  role: string = 'Software developer';
  location: string = 'Eindhoven, Nederland';
  linkedinUrl: string = 'https://www.linkedin.com/in/samuel-liska-19810149/';
  githubUrl: string = 'https://github.com/Biosaiber';
}
