//*O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:*//

 //   <S> → Representando State <T> → Representando Type <K> → Representando Key <V> → Representando Value <E> → Representando Element
    
    //Exemplo de um trecho de código utilizando generics:
    
    function useState<T>() {
        let state: T;
    
        function get(){
            return state;
        }
    
        function set(newValue: T){
            state = newValue;
        }
    
        return { get, set}
    }
    
    let newState = useState();
    newState.get();
    newState.set("João");
    newState.set(123);
    