import { Pipe, PipeTransform } from "@angular/core";
import { Task } from "../models/task.model";

@Pipe({name: "filterStatus"})
export class FilterStatusPipe implements PipeTransform {
    transform(items: Task[], term: number): any {
        return items.filter(item => item.status == term);
    }
}