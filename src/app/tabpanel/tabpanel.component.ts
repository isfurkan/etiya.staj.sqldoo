import { Component, OnInit } from '@angular/core';

import { Tab } from "app/tabpanel/Tab";
import { TabpanelService } from "app/tabpanel/tabpanel.service";
import { TAB_LIST } from "app/tabpanel/tablist";
import { Car } from "app/domain/car";
@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.css'],
  providers: [TabpanelService]
})
export class TabpanelComponent implements OnInit {

  tabs: Tab[];
  pmenuId: number;
  cars: Car[];
  cols: any[];

  constructor(private tabpanelService: TabpanelService) {
    this.tabs = this.tabpanelService.getTabList();
  }

  ngOnInit() {

    let dashbord = new Tab();
    dashbord.menuId = 0;
    dashbord.menuName = 'Dashbord';
    dashbord.isSelected = true;
    dashbord.isClosable = false;
    dashbord.content = 'Selam bebek';

    this.tabpanelService.addToTabList(dashbord);
    this.tabpanelService.getSmallCars().then(cars => this.cars = cars);
        
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    //this.tabs = this.tabpanelService.getTabList();
  }

  onTabClose(event) {
    //this.onTabChange(event);
    this.tabpanelService.removeByIndexId(event.index);
    console.log("kapatıyoruz" + event.index);
    // 

  }

  onTabChange(event) {
    console.log("index = " + event.index);
    var sayi = 0;
    var ct=0;
    var keepGoing = true;
    TAB_LIST.forEach(element => {
      if (keepGoing) {
        var simdiki = TAB_LIST[event.index];
 
        if (element.isSelected) {
          if (keepGoing) {
            var IND: number[] = [];
            for (var j = 0; j <= TAB_LIST.length - 1; j++) {
              IND[j] = j;
              console.log(IND[j]);
            }var k = simdiki.menuId;
           // for (var k = simdiki.menuId; k <= TAB_LIST.length-1; k++) {
             var deneme;
              console.log(k);
              for (var i = 1; i <= TAB_LIST.length-1 ; i++) {
                if (k == IND[i]) {
                  var second = true;
                  console.log(k + "için index arrayinde" + IND[i] + " geliyor => bulundu" + second);
                  //k++;
                  ct=ct+1;
                  break;
                }
                else {
                  second = false;
                  console.log(k + "için index arrayinde" + IND[i] + "geliyor => bulunamadı");
                sayi++;
                
              }
             // } 
                
                }
                
                console.log(ct + " <<- ct & sayi ->> " + sayi +" i= " +i);
                
                if(ct+sayi==k){
                  sayi=0;
              console.log("sayii:  "+ sayi);
            }
            console.log("element id : " + element.menuId);
            if (sayi==0) {
              if (element.menuId == 0) {
                var aaa = element.menuId;
                TAB_LIST[aaa].isSelected = false;
                simdiki.isSelected = true;
                this.refreshGrid(simdiki.menuId);
                keepGoing = false;
                console.log("önceki menu id:" + element.menuId + " " + element.menuName);
                console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              } else if (sayi == TAB_LIST.length) {
                var bbb = TAB_LIST[sayi - 1];
                bbb.isSelected = false;
                simdiki.isSelected = true;
                this.refreshGrid(simdiki.menuId);
                keepGoing = false;
                console.log("önceki menu id:" + element.menuId + " " + element.menuName);
                console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              } else {
                var aaa = element.menuId - 1;
                TAB_LIST[aaa].isSelected = false;
                simdiki.isSelected = true;
                this.refreshGrid(simdiki.menuId);
                keepGoing = false;
                console.log("önceki menu id:" + element.menuId + " " + element.menuName);
                console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              }
            }
            else {
              console.log("element id: " + element.menuId);
              TAB_LIST[element.menuId].isSelected = false;
              simdiki.isSelected = true;
              this.refreshGrid(simdiki.menuId);
              console.log("önceki menu id:" + element.menuId + " " + element.menuName);
              console.log("şimdiki menu id: " + simdiki.menuId + " " + simdiki.menuName);
              keepGoing = false;
            }
          }
        }
        /* console.log("element id: "+element.menuId);
         if(TAB_LIST.length==element.menuId){
           var aaa=element.menuId-1;
           console.log("element aaa id: "+aaa);
         TAB_LIST[aaa].isSelected=false;
         simdiki.isSelected=true;  
         this.refreshGrid(simdiki.menuId);
         console.log("önceki menu id:"+element.menuId + " "+ element.menuName);
         console.log("şimdiki menu id: "+ simdiki.menuId + " " + simdiki.menuName);
         keepGoing=false;
         }else{
         console.log("element id: "+element.menuId);
         TAB_LIST[element.menuId].isSelected=false;
         simdiki.isSelected=true;  
         this.refreshGrid(simdiki.menuId);
         console.log("önceki menu id:"+element.menuId + " "+ element.menuName);
         console.log("şimdiki menu id: "+ simdiki.menuId + " " + simdiki.menuName);
         keepGoing=false;
         }
       }
       else
       console.log("SEÇİLİ MENÜ BULUNAMADI")
     }*/
      }
    });


    /*
        var t = "";
        var o = event;
        for (var q in o) t += o[q] instanceof Function ? q + " = function{}\n" : q + " = " + o[q] + "\n";
        
        alert(t);
        
*/

  }
  public refreshGrid(menuId?: number) {

    if (menuId) {
      console.log("menu Id var " + menuId);
      this.pmenuId = menuId;
    } else {
      console.log("menu Id yok");
      this.pmenuId = 0;

    }

    this.cols = this.tabpanelService.refreshGrid(this.pmenuId);
    if (this.pmenuId == 1) {
      console.log("get cars");
      this.tabpanelService.getSmallCars();
    }
  }
}


