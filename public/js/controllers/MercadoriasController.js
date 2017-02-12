angular.module('JComerce').controller('MercadoriasController',
  function(Mercadoria, $scope) {

    $scope.show = false;

    $scope.mercadorias = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};

    function buscaMercadorias() {
      Mercadoria.query(
        function(mercadorias) {
          $scope.mercadorias = mercadorias;
          $scope.mensagem = {};
        },
        function(erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: 'Não foi possível obter a lista'
          };
        }
      );
    }
    
    buscaMercadorias();

    $scope.remove = function(mercadoria) {
      Mercadoria.delete({id: mercadoria._id},
        buscaMercadorias,
        function(erro) {
          $scope.mensagem ={
            texto: 'Não foi possível remover a mercadoria'
          };
          console.log(erro);
        }
      );
    };
});
