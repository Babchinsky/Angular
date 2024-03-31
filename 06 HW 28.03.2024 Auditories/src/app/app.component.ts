import { Component } from '@angular/core';
import { AuditoriumService } from './services/auditorium-service.service';
import { GroupService } from './services/group-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pr1';

  audiences: { name: string; capacity: number; faculty: string }[] = [];
  groups: { name: string; studentCount: number; faculty: string }[] = [];

  selectedFaculty: string = 'all';
  selectedGroup: string = 'all'; // Выбранная группа
  searchInput: string = '';
  sortBy: string = '';
  faculties: string[] = [];
  groupNames: string[] = []; // Массив названий групп

  // constructor() {
  //   this.extractFaculties();
  //   this.extractGroupNames();
  // }

  constructor(
    private auditoriumService: AuditoriumService,
    private groupService: GroupService
  ) {
    this.audiences = this.auditoriumService.getAudiences();
    this.groups = this.groupService.getGroups();
     this.extractFaculties();
     this.extractGroupNames();
  }

  extractFaculties() {
    this.faculties = Array.from(
      new Set(this.audiences.map((audience) => audience.faculty))
    );
  }

  extractGroupNames() {
    this.groupNames = Array.from(
      new Set(this.groups.map((group) => group.name))
    );
  }
}
