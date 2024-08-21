/**
 * 
 */

// describe("Date helper", () => {
//     describe("When getMonth is called", () => {
//         it("the function return janvier for 2022-01-01 as date", () => {
//             // to implement
//         });
//         it("the function return juillet for 2022-07-08 as date", () => {
//             // to implement
//         });
//     });
// })
// Importez la fonction getMonth que vous souhaitez tester
import { getMonth } from "../../helpers/Date"; // Ajustez le chemin selon la localisation de votre fichier

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function returns janvier for 2022-01-01 as date", () => {
            const date = new Date("2022-01-01");
            const month = getMonth(date);
            expect(month).toBe("janvier"); // Vérifiez que la fonction retourne bien "janvier"
        });

        it("the function returns juillet for 2022-07-08 as date", () => {
            const date = new Date("2022-07-08");
            const month = getMonth(date);
            expect(month).toBe("juillet"); // Vérifiez que la fonction retourne bien "juillet"
        });
    });
});

