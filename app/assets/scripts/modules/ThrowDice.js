import $ from 'jquery';
import rollDice from './rollDice';

class ThrowDice {
    constructor() {
        this.start = 0;
        this.throwCounter = 0;
        this.diceCounter = 0;
        this.wurf = [];

        this.events();
    }

//ACHIEVEMENT FÜHRUNGSKRAFT
//         - (void)fuehrungskraft
//         {
//             self.navigationItem.title = [NSString stringWithFormat:@"%@: Führungskraftwurf", player];
//             UIAlertView *alert = [[[UIAlertView alloc] initWithTitle:@"Führungskraft" message:@"Wähle einen Würfel und würfel diesen neu" delegate:self cancelButtonTitle:@"OK" otherButtonTitles:nil] autorelease];
//             [alert show];
//
//             for (int i=1; i <= diceCounter; i++) {
//             UIButton *my = (UIButton *)[self.view viewWithTag:i];
//             [my setEnabled:YES];
//
//         }
//
//             throwDice.hidden = NO;
//             QLog("Führungskraft"); /* DEBUG LOG */
//         }

    setDicesVisible(diceCounter) {
        //MACHT SOVIEL BUTTONS SICHTBAR, WIE DIE ANZAHL DER WÜRFEL IS
        for (let i=0; i < diceCounter; i++) {
            $('<button class="dice">' + diceCounter + '</button>').appendTo('.diceContainer');
        }
    }

    roll() {
        return rollDice();
    }

    throw() {
        // - (IBAction)throw
        // {	//ERSTER WURF ERFOLGT, ALSO START ERHÖHEN UND BUTTON SICHTBAR MACHEN
            this.start++;
        //     allEnable.hidden = NO;
        //
        //
        //     //BEI ERSTEM WURF AUCH 'FERTIG'BUTTON ANZEIGEN
            if (start == 1) {
        //         UIBarButtonItem *doneButton = [[UIBarButtonItem alloc] initWithTitle:@"Fertig" style:UIBarButtonItemStyleDone target:self action:@selector(nextView)];
        //         self.navigationItem.rightBarButtonItem = doneButton;
        //         [doneButton release];
                for (let i=1; i <= this.diceCounter; i++) {
        //             int myRandomNumber = arc4random()%6;
        //             UIButton *my = (UIButton *)[self.view viewWithTag:i];
        //             my.enabled = YES;
        //             [wurf removeObjectAtIndex:i];
        //             [wurf insertObject:[NSNumber numberWithInt:myRandomNumber] atIndex:i];
        //             QLog("Startobjekt %i: %@",i, [wurf objectAtIndex:i]);
                }
            }
        //     else if (start == 4) {
        //         //NOCH ABFANGEN DAS ER WIRKLICH EINEN GEWÄHLT HAT && AUCH WIRKLICH NUR EINEN!!!
        //         for (int i=1; i <= diceCounter; i++) {
        //             int myRandomNumber = arc4random()%6;
        //             UIButton *my = (UIButton *)[self.view viewWithTag:i];
        //             if (my.enabled == NO) {
        //                 [wurf removeObjectAtIndex:i];
        //                 [wurf insertObject:[NSNumber numberWithInt:myRandomNumber] atIndex:i];
        //                 QLog("Führungs!!!!objekt %i: %@",i, [wurf objectAtIndex:i]);
        //                 my.enabled = YES;
        //             }
        //         }
        //     }
        //     //ALLE ANDEREN WÜRFE
        //     else {
        //         for (int i=1; i <= diceCounter; i++) {
        //             int myRandomNumber = arc4random()%6;
        //             UIButton *my = (UIButton *)[self.view viewWithTag:i];
        //             if ([wurf objectAtIndex:i] != [NSNumber numberWithInt:3]){
        //                 if (my.enabled == YES) {
        //                     [wurf removeObjectAtIndex:i];
        //                     [wurf insertObject:[NSNumber numberWithInt:myRandomNumber] atIndex:i];
        //                     QLog("objekt %i: %@",i, [wurf objectAtIndex:i]);
        //                 }
        //             }
        //         }
        //     }
        //
        //
        //
        //     //ÄNDERT DAS BILD ALLER WÜRFEL DIE NEU GEWORFEN WURDEN
        //     if (dice1.enabled == YES) {
        //         [dice1 setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%@.png", [wurf objectAtIndex:1]]] forState:UIControlStateNormal];
        //     }
        //     if (dice2.enabled == YES) {
        //         [dice2 setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%@.png", [wurf objectAtIndex:2]]] forState:UIControlStateNormal];
        //     }
        //     if (dice3.enabled == YES) {
        //         [dice3 setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%@.png", [wurf objectAtIndex:3]]] forState:UIControlStateNormal];
        //     }
        //     if (dice4.enabled == YES) {
        //         [dice4 setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%@.png", [wurf objectAtIndex:4]]] forState:UIControlStateNormal];
        //     }
        //     if (dice5.enabled == YES) {
        //         [dice5 setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%@.png", [wurf objectAtIndex:5]]] forState:UIControlStateNormal];
        //     }
        //     if (dice6.enabled == YES) {
        //         [dice6 setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%@.png", [wurf objectAtIndex:6]]] forState:UIControlStateNormal];
        //     }
        //     if (dice7.enabled == YES) {
        //         [dice7 setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%@.png", [wurf objectAtIndex:7]]] forState:UIControlStateNormal];
        //     }
        //     //ERHÖHT DIE ANZAHL DER WÜRFE UM EINS
        //     counter++;
        //
        //     //SETZT NEUEN TITLE
        //     self.navigationItem.title = [NSString stringWithFormat:@"%@: %i. Wurf", player, counter];
        //
        //     //FÜHRUNGSKRAFT WIRD AUSGELÖST WENN GEKAUFT
        //     if (counter == 3) {
        //         throwDice.hidden = YES;
        //         allEnable.hidden = YES;
        //         NSMutableArray *bufferArray = [[NSUserDefaults standardUserDefaults] objectForKey:[NSString stringWithFormat:@"achievementsArray%i", playerCounter]];
        //         if ([[bufferArray objectAtIndex:1] intValue] == 1) {
        //             [self fuehrungskraft];
        //         }
        //     }
        //     else if (counter == 4) {
        //         throwDice.hidden = YES;
        //         allEnable.hidden = YES;
        //         self.navigationItem.title = [NSString stringWithFormat:@"%@: Weitere Würfe nicht möglich", player];
        //     }
        //
        // }
    }

    events () {
    }

}

export default ThrowDice;
