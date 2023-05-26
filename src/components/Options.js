
export const educ = [];
export const socs = [];
export const acts = [];
export const regPlcs = [];
export const entrPlcs = [];
export const partPoss = [];
export const mbrSt = [];
export const crdSt = [];

export function Options (options){

  for (let key in options){
    if(key == 'edus'){
      for (let ked of options['edus']){
        educ.push( ked.val)
        continue
        }
    }
    if(key == 'socs'){
      for (let ked of options['socs']){
        socs.push( ked.val)
        continue
        }
    }
    if(key == 'acts'){
      for (let ked of options['acts']){
        acts.push( ked.val)
        continue
        }
    }
    if(key == 'regPlcs'){
      for (let ked of options['regPlcs']){
        regPlcs.push( ked.val)
        continue
        }
    }
    if(key == 'entrPlcs'){
      for (let ked of options['entrPlcs']){
        entrPlcs.push( ked.val)
        continue
        }
    }
    if(key == 'partPoss'){
      for (let ked of options['partPoss']){
        partPoss.push( ked.val)
        continue
        }
    }
    if(key == 'mbrSt'){
      for (let ked of options['mbrSt']){
        mbrSt.push( ked.val)
        continue
        }
    }
    if(key == 'crdSt'){
      for (let ked of options['crdSt']){
        crdSt.push( ked.val)
        continue
        }
    }
  }
}

