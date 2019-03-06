import { Injectable } from '@angular/core';
@Injectable()
export class UtilService {

    getRptDateRanges(id: any) {
        switch (id) {
            case 1: { return this.getLastMonth(); }
            case 2: { return this.getThisMonth(); }
            case 3: { return this.getToday(); }
            case 4: { return this.getToday(); }
            default: { return this.getThisMonth(); }
        }
    }

    getLastMonth() {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth() - 1;
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        var fd = ("0" + firstDay.getDate()).slice(-2) + "/" + ("0" + (firstDay.getMonth() + 1)).slice(-2) + "/" + firstDay.getFullYear();
        var ld = ("0" + lastDay.getDate()).slice(-2) + "/" + ("0" + (lastDay.getMonth() + 1)).slice(-2) + "/" + lastDay.getFullYear();
        return { st: fd, sd: firstDay, et: ld, ed: lastDay };
    }

    getThisMonth() {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth(), d = date.getDay();
        var firstDay = new Date(y, m, 1);
        var lastDay = date;
        var fd = ("0" + firstDay.getDate()).slice(-2) + "/" + ("0" + (firstDay.getMonth() + 1)).slice(-2) + "/" + firstDay.getFullYear();
        var ld = ("0" + lastDay.getDate()).slice(-2) + "/" + ("0" + (lastDay.getMonth() + 1)).slice(-2) + "/" + lastDay.getFullYear();
        return { st: fd, sd: firstDay, et: ld, ed: lastDay };
    }

    getThisWeek() {
        var firstDay = new Date();
        var lastDay = new Date();
        var fd = ("0" + firstDay.getDate()).slice(-2) + "/" + ("0" + (firstDay.getMonth() + 1)).slice(-2) + "/" + firstDay.getFullYear();
        var ld = ("0" + lastDay.getDate()).slice(-2) + "/" + ("0" + (lastDay.getMonth() + 1)).slice(-2) + "/" + lastDay.getFullYear();
        return { st: fd, sd: firstDay, et: ld, ed: lastDay };
    }

    getToday() {
        var firstDay = new Date();
        var lastDay = new Date();
        var fd = ("0" + firstDay.getDate()).slice(-2) + "/" + ("0" + (firstDay.getMonth() + 1)).slice(-2) + "/" + firstDay.getFullYear();
        var ld = ("0" + lastDay.getDate()).slice(-2) + "/" + ("0" + (lastDay.getMonth() + 1)).slice(-2) + "/" + lastDay.getFullYear();
        return { st: fd, sd: firstDay, et: ld, ed: lastDay };
    }

    setDatestoStrings(firstDay: any, lastDay: any) {
        var fd = '', ld = '';
        if (firstDay) fd = ("0" + firstDay.getDate()).slice(-2) + "/" + ("0" + (firstDay.getMonth() + 1)).slice(-2) + "/" + firstDay.getFullYear();
        if (lastDay) ld = ("0" + lastDay.getDate()).slice(-2) + "/" + ("0" + (lastDay.getMonth() + 1)).slice(-2) + "/" + lastDay.getFullYear();
        return { st: fd, sd: firstDay, et: ld, ed: lastDay };
    }

    getCurrentTime() {
        var date = new Date();
        return ("0" + new Date().getHours()).slice(-2) + ':' + ("0" + new Date().getMinutes()).slice(-2);
    }

    getCurrentDate() {
        var date = new Date();
        return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
    }

    formatDate(date: any) {
        return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
    }

    formatDateDMY(date: any) {
        if (date) {
            var d = new Date(date);
            return ("00" + d.getDate()).slice(-2) + "-" + ("00" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear(); 
        } else return '';
    }

    formatDateYMD(date: any) {
        if (date) {
            var d = new Date(date);
            return d.getFullYear() + "-" + ("00" + (d.getMonth() + 1)).slice(-2) + "-" + ("00" + d.getDate()).slice(-2); 
        } else return '';
    }

    formatDateDDMMYYYY(d: any) {
        let date = new Date(d);
        return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
    }

    replaceCommaForCSV(data: any) {
        return data.replace(/,/g,'\\,');
    }

    isStringHasValue(str: string) {
        return str.replace(/ /gi,'') != '';
    }

    isStringHasNoValue(str: string) {
        return str.replace(/ /gi,'') == '';
    }

}