import Vue from 'vue'

Vue.config.errorHandler = function (err, vm, info) {
  Vue.nextTick(() => {
    if (process.env.NODE_ENV === 'development') {
      console.group('%c >>>>>> Message d erreur >>>>>>', 'color:red')
      console.log(`%c ${info}`, 'color:blue')
      console.groupEnd()
      console.group('%c >>>>>> L objet d instance Vue où l erreur s est produite>>>>>>', 'color:green')
      console.log(vm)
      console.groupEnd()
      console.group('%c >>>>>> La cause et l emplacement de l erreur >>>>>>', 'color:red')
      console.error(err)
      console.groupEnd()
    }
  })
}
