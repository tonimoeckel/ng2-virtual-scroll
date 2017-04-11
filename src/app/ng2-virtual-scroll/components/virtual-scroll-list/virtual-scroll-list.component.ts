import {Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'virtual-scroll-list',
  templateUrl: './virtual-scroll-list.component.html',
  styleUrls: ['./virtual-scroll-list.component.css']
})
export class VirtualScrollListComponent implements OnInit {

  @Input()
  items: any[];

  @Input()
  itemHeight: number | Function;

  heights: {height: number, start: number, stop: number}[];

  scrollHeight: number;

  topPadding: number;

  bottomPadding: number;

  viewPortHeight: number;

  @Input()
  reverse: boolean = false;

  private viewPortElement: any;


  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {

    this.onScroll.bind(this);
    this.viewPortElement = this._elementRef.nativeElement.parentElement;
    this.viewPortHeight = this.viewPortElement.offsetHeight;
    this.viewPortElement.addEventListener('scroll',this.onScroll);

    this.refresh();

  }

  onScroll = () => {
    this.renderItems();
  }

  private renderItems() {

    if (this.reverse){
      this.topPadding = this.scollHeight;
      this.viewPortElement.scrollTop = this.scollHeight;



    }

    let scrollTop = this.viewPortElement.scrollTop;
    let startIndex;
    let stopIndex;
    this.heights.forEach((item, index)=>{

    })


  }

  refresh(){
    this.updateHeights();
    this.renderItems();
  }

  shouldRenderItem(item){

  }

  updateHeights(){

    let tmp = [];
    for (let item of this.items){

      let height = 0;
      if (typeof this.itemHeight == 'number'){
        height = this.itemHeight;
      }else if (typeof this.itemHeight == 'function'){
        height = this.itemHeight(item);
      }
      tmp.push(height)

    }

    this.heights = tmp;

    let scrollHeight = 0;
    for (let height of this.heights){
      scrollHeight += height;
    }
    this.scollHeight = scrollHeight;

  }

}
