# WinForms és MySQL adatbázis alkalmazás

Ez a WinForms alkalmazás MySQL adatbázishoz kapcsolódik, és ingatlanhirdetésekkel kapcsolatos adatokat kezel. A program beolvassa az `ingatlanok` adatbázisból az `sellers` (eladók) táblát, megjeleníti a neveket egy listában, majd az adott eladó kiválasztása után részletes információt jelenít meg, valamint lekérdezi, hány ingatlanhirdetés kapcsolódik az eladóhoz.

## Szükséges NuGet csomagok

A projekt futtatásához telepíteni kell a következő NuGet csomagot:

```bash 
Visual Studio-ban:

Jobb klikk a projekt nevére > "Manage NuGet Packages"

Keresés: MySqlConnector
```