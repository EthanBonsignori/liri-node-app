# liri-node-app
LIRI - A language interpretation and recognition interface that takes node command line arguments and retrieves data based on those arguments.

---

## How it works
Once you have the repository cloned or downloaded and added your own API keys in the .env file (detailed below), navigate to the folder containing `liri.js` in your terminal of choice. Using node, enter commands in the terminal to retrive data from an API. The commands available are:

### `help` (displays all commands)

### `concert-this <band-or-artist>` (displays info about upcoming concerts for entered band)

### `spotify-this-song <song>` (displays info about entered song)

### `movie-this <movie-title>` (displays info about entered movie)

### `do-what-it-says` (does whatever command is in random.txt file)

---
## How to use
1. Make sure you have [Node](https://nodejs.org/) installed on your machine. 
2. Clone or download this repository.
3. Get keys and id's for the required APIs. Links to each are below.
    * Bandsintown: https://manager.bandsintown.com/support/bandsintown-api
    * Spotify: https://developer.spotify.com/my-applications/#!/
    * OMDb: http://www.omdbapi.com/apikey.aspx
4. Open the file called `.env!` with a text editor.
5. Add your keys in the correct places, it should look something like this:

        SPOTIFY_ID=your_id_here
        SPOTIFY_SECRET=your_secret_here
        BANDS_IN_TOWN_ID=your_id_here
        OMDB_KEY=your_key_here
6. Save `.env!` as `.env` (remove the `!`).
7. Using a terminal, such as [bash](https://git-scm.com/downloads), navigate to the folder that contains `liri.js`.
8. Enter a command using the following syntax:

        node liri <your-command> <argument>
9. You can view a log of all commands and responses in the `log.txt` file.

---
## Example
A user might enter:

    node liri spotify-this-song I want it that way

Results would look like this:
![results_example](/images/example.png)

And a similar block of text would be added to the `log.txt` file:
![log_example](/images/log_example.png)