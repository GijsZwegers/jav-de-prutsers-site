# Automatisch deployen naar de FTP-server

Bij elke push naar de `main`-branch bouwt GitHub Actions de site opnieuw (`npm run build`,
levert de map `out/` op) en zet die map via FTP op de webserver. Het workflow-bestand staat in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Wat ik al heb klaargezet

- Het workflow-bestand (`.github/workflows/deploy.yml`) — hoeft niet aangepast te worden.
- Gebruikt de veelgebruikte, stabiele [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action).

## Wat jij nog moet doen

### 1. Zorg dat de code op GitHub staat

Dit project is al een git-repository, maar heeft nog geen GitHub-remote. Zie de instructies die
er apart bij zijn gegeven voor het aanmaken van de repository en de eerste push.

### 2. FTP-gegevens klaarzetten

Zorg dat je van je hostingpartij de volgende gegevens hebt:

- **FTP-server** (bijv. `ftp.javluyksgestel.nl`)
- **FTP-gebruikersnaam**
- **FTP-wachtwoord**
- **Doelmap op de server** waar de website-bestanden moeten komen (bijv. `/` of
  `/public_html/` of `/www/` — dit verschilt per hostingpartij)

### 3. Secrets toevoegen aan de GitHub-repository

Ga in de GitHub-repository naar **Settings → Secrets and variables → Actions → New repository
secret** en voeg deze vier secrets toe (exacte namen, hoofdlettergevoelig):

| Naam              | Waarde                                      |
| ----------------- | -------------------------------------------- |
| `FTP_SERVER`      | het FTP-adres, bijv. `ftp.javluyksgestel.nl` |
| `FTP_USERNAME`    | je FTP-gebruikersnaam                        |
| `FTP_PASSWORD`    | je FTP-wachtwoord                            |
| `FTP_SERVER_DIR`  | de doelmap op de server, bijv. `/`           |

Deze secrets zijn versleuteld opgeslagen en nergens zichtbaar in logs of code.

### 4. Testen

Zodra de secrets staan, kun je de pipeline handmatig starten:
**Actions-tab → "Build en deploy naar FTP" → Run workflow.**

Daarna draait hij automatisch bij elke push naar `main`. Volg de voortgang (en eventuele
foutmeldingen) in de **Actions**-tab van de repository.

## Let op

- Gebruikt je hostingpartij **SFTP** (poort 22) of **FTPS** in plaats van gewoon FTP? Laat het
  weten, dan pas ik de workflow aan — de gebruikte actie ondersteunt ook die protocollen.
- De eerste keer dat dit draait, wordt de doelmap op de server vergeleken met de nieuwe
  bestanden en worden verschillen geüpload. Bestanden die niet in de nieuwe build voorkomen
  worden **niet** automatisch verwijderd (`dangerous-clean-slate: false` in het workflow-bestand),
  zodat er nooit per ongeluk iets anders op de server wordt gewist.
