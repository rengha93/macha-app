import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: any, args?: any): any {
    //value is array i.e. the product
    //args is that search text
    //console.log("value in pipe"+JSON.stringify(value));
    console.log("args in pipe"+args);
    if(args === undefined) return product;

    return product.filter(function(p){
      return p.description.toLowerCase().includes(args.toLowerCase());
    })


    // for(var i=0;i<value.length;i++){
    //       //console.log(JSON.stringify(value[i]))
    //       console.log(JSON.stringify(value[i].description))
    //       if(JSON.stringify(value[i].description).toLowerCase().search(args)){
    //         console.log(JSON.stringify(value[i]))
    //         this.product.push(value[i]);
    //       }
    // }
    // console.log("before sending pipe value");
    // for(var j=0;j<this.product.length;j++){
    //   console.log("product Value"+JSON.stringify(this.product[i]))
    // }


    // if(!args){
    //   return value;
    // }else{
    //   console.log("args"+args)
    //   args=args.toLowerCase().toString();
    // }
    //
    // return value.filter(pdt=>{
    //   pdt.description(args)==true
    // })
  }

}
