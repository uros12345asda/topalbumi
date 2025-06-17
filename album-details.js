document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');

    // U budućnosti, ovi podaci bi trebalo da dolaze sa servera,
    // ali za sada su hardkodovani radi demonstracije.
    // Ovi podaci su obogaćeni Spotify embed linkovima.
    const albumData = {
        'yeezus': {
            title: 'Yeezus',
            artist: 'Kanye West',
            cover: 'slike/Yeezus_album_cover.png',
            bio: `Kanye West je američki reper, tekstopisac, producent i modni dizajner. Poznat je po svojoj muzičkoj inovaciji, kontroverznom ponašanju i uticaju na popularnu kulturu. Yeezus, izdat 2013. godine, je njegov šesti studijski album. Obeležen je minimalističkim i agresivnim zvukom, eksperimentisanjem sa industrialom i elektronikom, i sirovim tekstovima koji se bave temama rase, slave i kritikom društva. Album je izazvao podeljene reakcije kritike, ali je kasnije prepoznat kao jedno od njegovih najhrabrijih i najuticajnijih dela.`,
            tracklist: [
                'On Sight', 'Black Skinhead', 'I Am a God (feat. God)', 'New Slaves', 'Hold My Liquor (feat. Chief Keef & Justin Vernon)',
                'I\'m in It (feat. Justin Vernon & Assassin)', 'Blood on the Leaves', 'Guilt Trip (feat. Kid Cudi)', 'Send It Up (feat. King L & Assassin)',
                'Bound 2 (feat. Charlie Wilson)'
            ],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0QoO8gG0b15SZZFz2V3e9k?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'mbdtf': {
            title: 'My Beautiful Dark Twisted Fantasy',
            artist: 'Kanye West',
            cover: 'slike/ab67616d0000b273d9194aa18fa4c9362b47464f.jpg',
            bio: 'My Beautiful Dark Twisted Fantasy je peti studijski album američkog muzičara Kanye Westa, objavljen 2010. godine. Album je široko hvaljen od strane kritike i smatra se jednim od najvažnijih albuma 21. veka. Karakteriše ga raskošna produkcija, složene orkestracije, veliki broj gostujućih muzičara i introspektivni tekstovi koji se bave temama slave, ljubavi, gubitka i iskupljenja.',
            tracklist: ['Dark Fantasy', 'Gorgeous', 'POWER', 'All of the Lights', 'Monster', 'So Appalled', 'Devil in a New Dress', 'Runaway', 'Hell of a Life', 'Blame Game', 'Lost in the World', 'Who Will Survive in America'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/202C2oH4PquN8RddJm9Aip?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'abbeyroad': {
            title: 'Abbey Road',
            artist: 'The Beatles',
            cover: 'slike/R1344-005-Beatles-ABBEY-ROAD.webp',
            bio: 'Abbey Road je jedanaesti studijski album engleskog rok benda The Beatles, objavljen 1969. godine. Poznat po kultnom omotu na kome članovi benda prelaze zebru ispred studija Abbey Road, album sadrži neke od njihovih najpoznatijih pesama i prepoznatljiv je po inovativnoj produkciji i majstorstvu u kompoziciji. Iako je izdat pred njihov raspad, smatra se jednim od njihovih najkohezivnijih i najvažnijih dela.',
            tracklist: ['Come Together', 'Something', 'Maxwell\'s Silver Hammer', 'Oh! Darling', 'Octopus\'s Garden', 'I Want You (She\'s So Heavy)', 'Here Comes the Sun', 'Because', 'You Never Give Me Your Money', 'Sun King', 'Mean Mr. Mustard', 'Polythene Pam', 'She Came in Through the Bathroom Window', 'Golden Slumbers', 'Carry That Weight', 'The End', 'Her Majesty'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0ETFjACtuP2ADo6LFhL6HN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'nevermind': {
            title: 'Nevermind',
            artist: 'Nirvana',
            cover: 'slike/R1344-006-Nirvana-NEVERMIND-HR.webp',
            bio: 'Nevermind je drugi studijski album američkog rok benda Nirvana, objavljen 1991. godine. Album je katapultirao bend u svetsku slavu i smatra se ključnim delom u popularizaciji grandža i alternativnog roka 90-ih godina. "Smells Like Teen Spirit" postala je himna generacije, a album je doneo sirovu energiju panka i melanholičnu introspekciju, redefinišući pejzaž pop i rok muzike.',
            tracklist: ['Smells Like Teen Spirit', 'In Bloom', 'Come as You Are', 'Breed', 'Lithium', 'Polly', 'Territorial Pissings', 'Drain You', 'Lounge Act', 'Stay Away', 'On a Plain', 'Something in the Way', 'Endless, Nameless'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2GuirTSEqQzT2VfB7rN80n?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'thriller': {
            title: 'Thriller',
            artist: 'Michael Jackson',
            cover: 'slike/R1344-012-MichaelJacksonThriller.webp',
            bio: 'Thriller je šesti studijski album američkog pevača Michael Jacksona, objavljen 1982. godine. Ostaje najprodavaniji album svih vremena i muzički fenomen koji je redefinisao pop muziku, spotove i industriju zabave. Album je kombinovao pop, rok, fank, soul i R&B sa inovativnom produkcijom, donoseći niz hit singlova poput "Billie Jean", "Beat It" i naslovne pesme "Thriller".',
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2ANV VergGz0yBfPMoK5W4l?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            tracklist: ['Wanna Be Startin\' Somethin\'', 'Baby Be Mine', 'The Girl Is Mine (feat. Paul McCartney)', 'Thriller', 'Beat It', 'Billie Jean', 'Human Nature', 'P.Y.T. (Pretty Young Thing)', 'The Lady in My Life']
        },
        'darksideofthemoon': {
            title: 'The Dark Side of the Moon',
            artist: 'Pink Floyd',
            cover: 'slike/Dsotm.jpg',
            bio: 'The Dark Side of the Moon je osmi studijski album engleskog rok benda Pink Floyd, objavljen 1973. godine. Poznat po svojim filozofskim tekstovima, inovativnom zvuku i konceptualnoj temi o životnom ciklusu, pohlepi, ludilu i smrti. Album je bio komercijalno izuzetno uspešan i smatra se jednim od najuticajnijih i najprodavanijih albuma u istoriji muzike.',
            tracklist: ['Speak to Me', 'Breathe', 'On the Run', 'Time', 'The Great Gig in the Sky', 'Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4LH4d3cOWNNsVzqcDYJGuE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'backinblack': {
            title: 'Back in Black',
            artist: 'AC/DC',
            cover: 'slike/250px-ACDC_Back_in_Black.png',
            bio: 'Back in Black je sedmi studijski album australijskog hard rok benda AC/DC, objavljen 1980. godine. Posvećen je preminulom pevaču Bon Scottu i obeležava debi novog pevača Briana Johnsona. Album je postao komercijalni gigant i jedno od najprodavanijih izdanja svih vremena, poznat po svojim energičnim gitarskim rifovima i sirovom hard rok zvuku.',
            tracklist: ['Hells Bells', 'Shoot to Thrill', 'What Do You Do for Money Honey', 'Given the Dog a Bone', 'Let Me Put My Love into You', 'Back in Black', 'You Shook Me All Night Long', 'Have a Drink on Me', 'Shake a Leg', 'Rock and Roll Ain\'t Noise Pollution'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6mUdeP8n40gM1Wd6K0y9Bx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'rumours': {
            title: 'Rumours',
            artist: 'Fleetwood Mac',
            cover: 'slike/FMacRumours.png',
            bio: 'Rumours je jedanaesti studijski album britansko-američkog rok benda Fleetwood Mac, objavljen 1977. godine. Album je sniman usred turbulentnih ličnih odnosa članova benda, što je dodalo emotivnu dubinu i tenziju pesmama. Postao je jedan od najprodavanijih albuma svih vremena, poznat po svojim pop-rok hitovima i kompleksnim harmonijama.',
            tracklist: ['Second Hand News', 'Dreams', 'Never Going Back Again', 'Don\'t Stop', 'Go Your Own Way', 'Songbird', 'The Chain', 'You Make Loving Fun', 'I Don\'t Want to Know', 'Oh Daddy', 'Gold Dust Woman'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1HEo1nS1z71T1KjDojvY9Q?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'joshuatree': {
            title: 'The Joshua Tree',
            artist: 'U2',
            cover: 'slike/The_Joshua_Tree.png',
            bio: 'The Joshua Tree je peti studijski album irskog rok benda U2, objavljen 1987. godine. Album je doneo bendu globalnu superzvezdu i bio je kritički i komercijalno izuzetno uspešan. Poznat po svojim epskim zvukovima, tekstovima inspirisanim američkim pejzažom i političkim i duhovnim temama, The Joshua Tree je iznedrio hitove poput "With or Without You" i "I Still Haven\'t Found What I\'m Looking For".',
            tracklist: ['Where the Streets Have No Name', 'I Still Haven\'t Found What I\'m Looking For', 'With or Without You', 'Bullet the Blue Sky', 'Running to Stand Still', 'Red Hill Mining Town', 'In God\'s Country', 'Trip Through Your Wires', 'One Tree Hill', 'Exit', 'Mothers of the Disappeared'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3D3fM82B1B1f78nN9W7xLg?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'okcomputer': {
            title: 'OK Computer',
            artist: 'Radiohead',
            cover: 'slike/Radiohead_OK_Computer_1997.jpg.png',
            bio: 'OK Computer je treći studijski album engleskog alternativnog rok benda Radiohead, objavljen 1997. godine. Album je dobio univerzalne pohvale kritike i smatra se jednim od najvažnijih albuma 90-ih godina. Njegovi tekstovi se bave temama konzumerizma, globalizacije i otuđenja u modernom svetu, dok muzika kombinuje eksperimentalne elemente sa prepoznatljivim rok zvukom.',
            tracklist: ['Airbag', 'Paranoid Android', 'Subterranean Homesick Alien', 'Exit Music (For a Film)', 'Let Down', 'Karma Police', 'Fitter Happier', 'Electioneering', 'Climbing Up the Walls', 'No Surprises', 'Lucky', 'The Tourist'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6d6UkyX371b86e0v22iPjF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'bad': {
            title: 'Bad',
            artist: 'Michael Jackson',
            cover: 'slike/bad.jpg',
            bio: 'Bad je sedmi studijski album američkog pevača Michael Jacksona, objavljen 1987. godine. Nastavljajući uspeh albuma Thriller, Bad je takođe postigao ogroman komercijalni uspeh, iznedrivši pet singlova koji su dostigli broj 1 na Billboard Hot 100 listi. Album je pokazao Michaelov rast kao tekstopisca i producenta, sa pesmama koje istražuju različite žanrove od popa i R&B-a do hard roka.',
            tracklist: ['Bad', 'The Way You Make Me Feel', 'Speed Demon', 'Liberian Girl', 'Just Good Friends (feat. Stevie Wonder)', 'Another Part of Me', 'Man in the Mirror', 'I Just Can\'t Stop Loving You (feat. Siedah Garrett)', 'Dirty Diana', 'Smooth Criminal', 'Leave Me Alone'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2DQyX97tVjW6E9Wb94k6mK?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'likeavirgin': {
            title: 'Like a Virgin',
            artist: 'Madonna',
            cover: 'slike/like_a_virgin.jpg',
            bio: 'Like a Virgin je drugi studijski album američke pevačice Madonne, objavljen 1984. godine. Album je katapultirao Madonnu u globalnu superzvezdu i postao je kulturna ikona 80-ih. Naslovna pesma i singl "Material Girl" postali su hitovi, a album je definisao njen imidž kao provokativne i samouverene pop umetnice.',
            tracklist: ['Material Girl', 'Angel', 'Like a Virgin', 'Over and Over', 'Love Don\'t Live Here Anymore', 'Dress You Up', 'Shoo-Bee-Doo', 'Pretender', 'Stay'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2M5Iyk3d651Bca0QY8JzC2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        '21adele': {
            title: '21',
            artist: 'Adele',
            cover: 'slike/21.jpg',
            bio: '21 je drugi studijski album engleske pevačice Adele, objavljen 2011. godine. Album je postigao monumentalni uspeh, postajući najprodavaniji album 21. veka i osvojivši brojne nagrade, uključujući Grammyja za Album godine. Pesme poput "Rolling in the Deep" i "Someone Like You" postale su globalni hitovi, a album je prepoznat po svojim snažnim vokalnim izvedbama i emotivnim baladama.',
            tracklist: ['Rolling in the Deep', 'Rumour Has It', 'Turning Tables', 'Don\'t You Remember', 'Set Fire to the Rain', 'He Won\'t Go', 'Take It All', 'I\'ll Be Waiting', 'One and Only', 'Lovesong', 'Someone Like You'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4sB779tVpS6sQe8pUo20eM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'kindofblue': {
            title: 'Kind of Blue',
            artist: 'Miles Davis',
            cover: 'slike/kind_of_blue.jpg',
            bio: 'Kind of Blue je studijski album američkog džez trubača Miles Davisa, objavljen 1959. godine. Smatra se jednim od najvećih i najuticajnijih džez albuma svih vremena. Pionir modalnog džeza, album je poznat po svojoj opuštenoj atmosferi, improvizacionim melodijama i izuzetnom doprinosu muzičke istorije, inspirišući generacije muzičara i slušalaca.',
            tracklist: ['So What', 'Freddie Freeloader', 'Blue in Green', 'All Blues', 'Flamenco Sketches'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1ht5xV8JbIeE2V0T84cK8C?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'alovesupreme': {
            title: 'A Love Supreme',
            artist: 'John Coltrane',
            cover: 'slike/love_supreme.jpg',
            bio: 'A Love Supreme je studijski album američkog džez saksofoniste John Coltranea, objavljen 1965. godine. Album je duboko duhovno delo koje istražuje Coltraneovu ličnu potragu za duhovnošću kroz muziku. Sastoji se od četiri dela i smatra se jednim od najvažnijih i najrevolucionarnijih džez albuma, spajajući hard bop sa free džezom i duhovnim izrazom.',
            tracklist: ['Part I: Acknowledgement', 'Part II: Resolution', 'Part III: Pursuance', 'Part IV: Psalm'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3b7vX3vV4b1dM3B2R70C4W?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'lowendtheory': {
            title: 'The Low End Theory',
            artist: 'A Tribe Called Quest',
            cover: 'slike/low_end.jpg',
            bio: 'The Low End Theory je drugi studijski album američke hip-hop grupe A Tribe Called Quest, objavljen 1991. godine. Smatra se ključnim delom u istoriji alternativnog hip-hopa, spajajući džez elemente sa svesnim tekstovima i inovativnim semplovanjem. Album je imao ogroman uticaj na kasniji razvoj hip-hopa i prepoznat je po svojoj muzičkoj sofisticiranosti i društvenoj svesti.',
            tracklist: ['Excursions', 'Buggin\' Out', 'Rap Promoter', 'Butter', 'Verses from the Abstract', 'Show Business', 'Vibes and Stuff', 'The Infamous Date Rape', 'Check the Rhime', 'Halftime', 'Passing Me By', 'Scenario'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1pY3R8DfaH9D2Wz6b26P5Y?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'illmatic': {
            title: 'Illmatic',
            artist: 'Nas',
            cover: 'slike/illmatic.jpg',
            bio: 'Illmatic je debi studijski album američkog repera Nasa, objavljen 1994. godine. Široko je priznat kao jedan od najvećih hip-hop albuma svih vremena. Album je poznat po svojim kompleksnim rimama, živopisnim opisima života u Kvinsbridžu, Njujorku, i uticajnoj produkciji. Smatra se klasičnim delom hip-hopa i referentnom tačkom za lirske veštine.',
            tracklist: ['The Genesis', 'N.Y. State of Mind', 'Life\'s a Bitch', 'The World Is Yours', 'Halftime', 'Memory Lane (Sittin\' in da Park)', 'One Love', 'One Time 4 Your Mind', 'Represent', 'It Ain\'t Hard to Tell'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3V003XNmp4C4M28tU4rR22?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'randomaccessmemories': {
            title: 'Random Access Memories',
            artist: 'Daft Punk',
            cover: 'slike/ram.jpg',
            bio: 'Random Access Memories je četvrti i poslednji studijski album francuskog elektronskog dua Daft Punk, objavljen 2013. godine. Album je odstupio od njihovog uobičajenog elektronskog zvuka, fokusirajući se na live instrumentaciju, fank i disko elemente. Osvojio je brojne nagrade, uključujući Grammyja za Album godine, a singl "Get Lucky" postao je globalni hit. Album je bio poslednji pre njihovog raspuštanja.',
            tracklist: ['Give Life Back to Music', 'The Game of Love', 'Giorgio by Moroder', 'Within', 'Instant Crush (feat. Julian Casablancas)', 'Lose Yourself to Dance (feat. Pharrell Williams)', 'Touch (feat. Paul Williams)', 'Get Lucky (feat. Pharrell Williams & Nile Rodgers)', 'Beyond', 'Motherboard', 'Fragments of Time (feat. Todd Edwards)', 'Doin\' It Right (feat. Panda Bear)', 'Contact'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4m2880mkQc57d7v9xY7m7F?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'discovery': {
            title: 'Discovery',
            artist: 'Daft Punk',
            cover: 'slike/discovery.jpg',
            bio: 'Discovery je drugi studijski album francuskog elektronskog dua Daft Punk, objavljen 2001. godine. Album je značajno proširio njihov zvuk, inkorporirajući disko, fank i pop elemente u njihovu prepoznatljivu house muziku. Poznat po animiranom filmu "Interstella 5555" koji prati priču albuma, Discovery je iznedrio hitove kao što su "One More Time" i "Harder, Better, Faster, Stronger" i postao je klasik elektronske muzike.',
            tracklist: ['One More Time', 'Aerodynamic', 'Digital Love', 'Harder, Better, Faster, Stronger', 'Crescendolls', 'Nightvision', 'Superheroes', 'High Life', 'Face to Face', 'Something About Us', 'Veridis Quo', 'Short Circuit', 'Too Long', 'Steam Machine'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2eD2K7X5QyqBcfqj1tN9dM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
        'blue': {
            title: 'Blue',
            artist: 'Joni Mitchell',
            cover: 'slike/blue.jpg',
            bio: 'Blue je četvrti studijski album kanadske kantautorke Joni Mitchell, objavljen 1971. godine. Smatra se jednim od najboljih albuma svih vremena i remek-delom folka i popa. Album je poznat po svojim iskrenim, introspektivnim tekstovima koji se bave temama ljubavi, putovanja i samo-otkrivanja, uz ogoljenu i emotivnu vokalnu izvedbu.',
            tracklist: ['All I Want', 'My Old Man', 'Little Green', 'Carey', 'Blue', 'California', 'This Flight Tonight', 'A Case of You', 'The Last Time I Saw Richard', 'The Sire of the Titants'],
            spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1KyB3q872c0k117Z6F4yqL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
        },
    };

    if (albumId && albumData[albumId]) {
        const album = albumData[albumId];
        document.getElementById('albumPageTitle').textContent = album.title;
        document.getElementById('albumCover').src = album.cover;
        document.getElementById('albumTitle').textContent = album.title;
        document.getElementById('albumArtist').textContent = album.artist;
        document.getElementById('artistBio').textContent = album.bio;

        const tracklistElement = document.getElementById('tracklist');
        album.tracklist.forEach(track => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = track;
            tracklistElement.appendChild(li);
        });

        if (album.spotifyEmbed) {
            document.getElementById('spotifyEmbed').innerHTML = album.spotifyEmbed;
        }

        // Inicijalizacija sistema ocenjivanja
        const ratingInputs = document.querySelectorAll('.rating input[type="radio"]');
        const currentRatingDisplay = document.getElementById('currentRatingDisplay');
        const storedRating = localStorage.getItem(`albumRating_${albumId}`);

        if (storedRating) {
            // Pronađi radio dugme sa ispravnim ID-em i označi ga
            const checkedStar = document.getElementById(`star${storedRating}`);
            if (checkedStar) {
                checkedStar.checked = true;
            }
            currentRatingDisplay.textContent = `Vaša ocena: ${storedRating} zvezdica.`;
        } else {
            currentRatingDisplay.textContent = 'Još uvek niste ocenili ovaj album.';
        }

        ratingInputs.forEach(input => {
            input.addEventListener('change', function() {
                const ratingValue = this.value;
                localStorage.setItem(`albumRating_${albumId}`, ratingValue);
                currentRatingDisplay.textContent = `Vaša ocena: ${ratingValue} zvezdica.`;
            });
        });
    } else {
        document.getElementById('albumDetails').classList.add('d-none');
        document.getElementById('notFound').classList.remove('d-none');
    }
});