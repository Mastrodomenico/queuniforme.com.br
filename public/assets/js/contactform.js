require('angular')
require('ng-mask')

function ContactController($http, $timeout){
    let vm = this

    vm.isSuccess = false
    vm.isSubmiting = false
    vm.send = function (form) {
        //Valida o formulário
        if (form.$invalid) {
            //Ativa os erros nos inputs formulário
            vm.isError = true
            form.$dirty = true
            form.$$controls.forEach(function (element, idx) {
                form.$$controls[idx].$dirty = true
            })

            return
        }

        let request = {
            email: form.email.$modelValue,
            name: form.name.$modelValue,
            phone: form.phone.$modelValue,
            product: form.product.$modelValue,
            notes: form.notes ? form.notes.$modelValue : ''
        }
        const url = queuniforme.wphome + '/api/v1/sendmessage'
        const errorDefault = 'Um erro inesperado o ocorreu, tente novamente mais tarde'

        vm.isSubmiting = true //exibe o loading
        $http({
            url: url,
            method: "POST",
            data: request
        })
            .then(function (response) {
                vm.isSubmiting = false //Esconde o loading
                if (response.status === 200) {
                    vm.isSuccess = true //Exibe msg de sucesso

                    $('form[name=contactForm]')[0].reset() //Limpa o formulário

                    $timeout(function () {
                        vm.isSuccess = false //esconde msg de sucesso apos 2000ms
                    }, 10000)
                } else if (data.error) {
                    vm.errors = data.error
                } else {
                    vm.errors = errorDefault //exibe msg de erro padrão
                }
            })
            .catch(function (error) {
                vm.isSubmiting = false //esconde o loading
                vm.errors = errorDefault //exibe msg de error padrão
                console.error(error)
            })
    }
}

angular.module('queuniforme', ['ngMask'])
.controller('ContactController', ['$http', '$timeout', ContactController])

