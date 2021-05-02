class DispositivoEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada=tipoEntrada;
        this._marca=marca;
    }

    set setTipoEntrada(tipoEntrada){
        this._tipoEntrada=tipoEntrada;
    }

    set setMarca(marca){
        this._marca=marca;
    }

    get getTipoEntrada(){
        return this._tipoEntrada;
    }

    get getMarca(){
        return this._marca;
    }

}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton=++Raton.contadorRatones;
    }

    toString(){
        return "Tipo Entrada: " + super.getTipoEntrada + ", Marca: " + super.getMarca;
    }

}

class Teclado extends DispositivoEntrada{

    static contadorTeclados=0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado=++Teclado.contadorTeclados;
    }

    toString(){
        return "Tipo Entrada : " + super.getTipoEntrada + ", Marca: " + super.getMarca;
    }

}

class Monitor{

    static contadorMonitores=0;

    constructor(marca,tamagno){
        this._marca=marca;
        this._tamagno=tamagno;
        this._idMonitor=++Monitor.contadorMonitores;
    }

    set setMarca(marca){
        this._marca=marca;
    }

    set setTamaño(tamagno){
       this._tamagno=tamagno;       
    }

    get getMarca(){
        return this.marca;
    }

    get getTamaño(){
        return this._tamagno;
    }

    toString(){
        return "Marca: " + this._marca + ", Tamaño: " + this._tamagno;
    }

}

class Computadora{

    static contadorComputadoras=0;

    constructor(nombre,monitor,teclado,raton){
        this._nombre=nombre;
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
        this._idComputadora=++Computadora.contadorComputadoras;        
    }

    set setNombre(nombre){
        this._nombre=nombre;
    }

    set setMonitor(Monitor){
        this._monitor=Monitor;
    }

    set setTeclado(Teclado){
        this._teclado=Teclado;
    }

    set setRaton(Raton){
        this._raton=Raton;
    }

    get getNombre(){
        return this._nombre;
    }

    get getMonitor(){
        return this._monitor;
    }

    get getTeclado(){
        return this._teclado;
    }

    get getRaton(){
        return this._raton;
    }

    toString(){

        return "Computadora : " + this._nombre
             + "\n Id Computadora: " + this._idComputadora
             + "\n" + this._monitor.toString()
             + "\n" + this.teclado.toString()
             + "\n" + this.raton.toString();
    }

}

class Orden{

    static contadorOrdenes=0;
    _computadoras=[];

    constructor(){
     this._idOrden=++Orden.contadorOrdenes;
    }

    agregarComputadora(Computadora){
        this._computadoras.push(Computadora).toString();
    }

    mostrarOrden(){       
        
        console.log("Orden N° " + this._idOrden)

        for(let i=0;i<this._computadoras.length;i++){

            console.log(this._computadoras[i]);
        }
    }


}

orden1=new Orden();

monitor1=new Monitor("Samsung",43);
teclado1=new Teclado("USB","HyperX");
raton1=new Raton("USB","GTC");

computadora1=new Computadora(monitor1,teclado1,raton1);

orden1.agregarComputadora(computadora1);
orden1.toString();