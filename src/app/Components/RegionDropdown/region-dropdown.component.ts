
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'regiondropdown',
    templateUrl: './region-dropdown.component.html',
    styleUrls: ['./region-dropdown.component.scss'],
})

export class RegionDropdownComponent {
    showOptions = false;

    @Input()
    placeholder: string;

    @Input()
    values: string[];

    @Input()
    value: string;

    @Output()
    valueChange: EventEmitter<string> = new EventEmitter();

    select(value: string) {
        this.valueChange.emit(value);
    }

    toggleOptions() {
        this.showOptions = !this.showOptions;
    }
}