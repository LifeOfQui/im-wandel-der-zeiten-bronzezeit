# Im Wandel der Zeiten - Bronzezeit

## Installation
run yarn
- `yarn install`

  
## Usage
place files in specific folders:
- Images: `app/assets/images` 
- JS: `app/assets/scripts`
- CSS: `app/assets/styles`

run gulp task
- `gulp watch`
  
## Deployment
run gulp task
- `gulp build`

## next steps
- SETZT GETREIDE IM ERSTEN VIEW AUF DEN AKTUELLEN WERT UM DEM SPIELER EINEN ANHALTSPUNKT ZU GEBEN
- ENTFERNT DEN RECHTEN NAVBARBUTTON DAMIT MAN MINDESTENS EINMAL WÜRFELN MUSS
- SETZT DEN PLAYERNAMEN DES JEWEILIGEN SPIELERS OBEN ALS TITEL IN NAVBAR
- SCHAUT WIEVIEL HÄUSER VOLL SIND, UND BESTIMMT DADURCH DIE ANZAHL DER WÜRFEL MIT DEN GEWORFEN WIRD
- INITALISIERT 'WURDE SCHON EINMAL GEWÜRFELT(start) &amp; WIEOFT WURDE GEWÜRFELT(counter)', BUTTONMANAGMENT, SETZT ALLE WÜRFEL AUF e, ALSO NIX
- MACHT SOVIEL BUTTONS SICHTBAR, WIE DIE ANZAHL DER WÜRFEL IS

- ERSTER WURF ERFOLGT, ALSO START ERHÖHEN UND BUTTON SICHTBAR MACHEN
- BEI ERSTEM WURF AUCH 'FERTIG'BUTTON ANZEIGEN
- FÜHRUNGSKRAFT NOCH ABFANGEN DAS ER WIRKLICH EINEN GEWÄHLT HAT &amp;&amp; AUCH WIRKLICH NUR EINEN!!!
- ÄNDERT DAS BILD ALLER WÜRFEL DIE NEU GEWORFEN WURDEN
- ERHÖHT DIE ANZAHL DER WÜRFE UM EINS
- SETZT NEUEN TITLE
- FÜHRUNGSKRAFT WIRD AUSGELÖST WENN GEKAUFT

- LÄSST NOCHMAL ALLE WÜRFEL WÜRFELN, AUßER KATASTROPHEN

- SETZT BUTTON AUF DISABLE UM IHN IM NÄCHSTEN WURF UNBEACHTET ZU LASSEN

- ACHIEVEMENT FÜHRUNGSKRAFT

- GEHT DAS ARRAY DURCH UND SCHAUT WAS FÜR WÜRFEL DA SIND, SPEICHERT ALLE IN JEWEILIGEN ARRAYS
- SPEICHERT ALLE WERTE FÜR JEWEILIGEN SPIELER AB
- GEHE WEITER UND ZEIG GEGENFALLS NOCH ALERT VON HUNGERSNOT AN

- DECIDERVIEW
- WÄHLEN OB NAHRUNG ODER ARBEITER
- JEWEILS PRÜFEN OB HIER ACHIEVEMENTS VORHANDEN SIND, DIE MEHR DAVON GEBEN

- ANZAHL DER HÄUSER, SCHAUT DAS NAHRUNG NICHT ZUVIEL WIRD UND RECHNET AUS WIEVIEL NAHRUNG ÜBRIG IS, EVTL GLEICH NOCH HUNGERSNOT!
- KATASTROPHENANZAHL AUS AKTUELLEM WURF - ZEIGT SOVIEL WÜRFEL AN WIE GEWORFEN WURDEN
- KATASTROPHENMANAGER

- ARBEITER AUS AKTUELLEM WURF
- WENN SCHON ALLE HAUSER VOLL SIND, DANN GEH WEITER ZU MONUMENTEN
- ANSONSTEN JETZT DIE HÄUSER BEFÜLLEN


## done
- Webpack integration (to be able to write ES6)
