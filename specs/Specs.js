describe("Problema 1: highestSubArray test", function() {

    it("La función highestSubArray está definida", function() {
        expect(highestSubArray).not.toBeUndefined();
      });
 
    it("La función highestSubArray es efectivamente un función ", function() {
        expect(typeof highestSubArray).toBe("function")
        
    });

    it( "Recibe un arreglo [3, 2, 5, 9, 1, 3] y retorna [2, 5, 9]", function(){
        let a = [3, 2, 5, 9, 1, 3];
        expect( highestSubArray(a) ).toEqual([2, 5, 9])
    })

    it( "Recibe un arreglo [] y retorna indefinido", function(){
        let a = [];
        expect( highestSubArray(a) ).toEqual(undefined)
    })
   
});

describe("Problema 2: operation test", function() {

    it("La función operation está definida", function() {
        expect(operation).not.toBeUndefined();
      });
 
    it("La función operation es efectivamente un función ", function() {
        expect(typeof operation).toBe("function")
        
    });

    it( "Recibe un arreglo n=3 y m=6 y retorna 18", function(){
        expect( operation(3,6) ).toEqual(18)
    })

    it( "Recibe un  un numero n negativo y retorna 0", function(){
        expect( operation(-3,6) ).toEqual(0)
    })

    it( "Recibe un  un numero m negativo y retorna 0", function(){
        expect( operation(3,-6) ).toEqual(0)
    })

    it( "Recibe un  un numero n No entero y retorna 0", function(){
        expect( operation(3.34,-6) ).toEqual(0)
    })

    it( "Recibe un  un numero n No entero y retorna 0", function(){
        expect( operation(3,6.756) ).toEqual(0)
    })
   
});