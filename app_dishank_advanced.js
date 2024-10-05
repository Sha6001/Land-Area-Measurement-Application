// Event listener to start the application
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('locationSelection').classList.remove('hidden');
});

// Event listener for country selection
document.getElementById('countrySelect').addEventListener('change', function() {
    if (this.value === 'India') {
        var stateSelect = document.getElementById('stateSelect');
        stateSelect.innerHTML = '<option value="">Select State</option><option value="Karnataka">Karnataka</option>';
        document.getElementById('stateGroup').classList.remove('hidden');
    }
});

// Event listener for state selection
document.getElementById('stateSelect').addEventListener('change', function() {
    if (this.value) {
        var districtSelect = document.getElementById('districtSelect');
        districtSelect.innerHTML = `
            <option value="">Select District</option>
            <option value="BAGALKOTE">BAGALKOTE</option>
            <option value="BANGALORE RURAL">BANGALORE RURAL</option>
            <option value="BANGALORE URBAN">BANGALORE URBAN</option>
            <option value="BELGAUM">BELGAUM</option>
            <option value="BELLARY">BELLARY</option>
            <option value="BIDAR">BIDAR</option>
            <option value="BIJAPUR">BIJAPUR</option>
            <option value="CHAMARAJANAGARA">CHAMARAJANAGARA</option>
            <option value="CHIKKABALLAPUR">CHIKKABALLAPUR</option>
            <option value="CHIKMAGALUR">CHIKMAGALUR</option>
            <option value="CHITRADURGA">CHITRADURGA</option>
            <option value="DAKSHINA KANNADA">DAKSHINA KANNADA</option>
            <option value="DAVANAGERE">DAVANAGERE</option>
            <option value="DHARWAD">DHARWAD</option>
            <option value="GADAG">GADAG</option>
            <option value="HASSAN">HASSAN</option>
            <option value="HAVERI">HAVERI</option>
            <option value="KALABURAGI">KALABURAGI</option>
            <option value="KODAGU">KODAGU</option>
            <option value="KOLAR">KOLAR</option>
            <option value="KOPPAL">KOPPAL</option>
            <option value="MANDYA">MANDYA</option>
            <option value="MYSORE">MYSORE</option>
            <option value="RAICHUR">RAICHUR</option>
            <option value="RAMANAGARA">RAMANAGARA</option>
            <option value="SHIVAMOGGA">SHIVAMOGGA</option>
            <option value="TUMKUR">TUMKUR</option>
            <option value="UDUPI">UDUPI</option>
            <option value="UTTAR KANNADA">UTTAR KANNADA</option>
            <option value="YADAGIR">YADAGIR</option>
        `;
        document.getElementById('districtGroup').classList.remove('hidden');
    }
});

// Event listener for district selection
document.getElementById('districtSelect').addEventListener('change', function() {
    if (this.value) {
        var talukSelect = document.getElementById('talukSelect');
        var taluks = {
            'BAGALKOTE': `
                <option value="">Select Taluk</option>
                <option value="BADAMI">BADAMI</option>
                <option value="BAGALKOT">BAGALKOT</option>
                <option value="Jamkhandi">Jamkhandi</option>
                <option value="Terdal">Terdal</option>
                <option value="Rabkavi Banhatti">Rabkavi Banhatti</option>
                <option value="Ilkal taluk">Ilkal taluk</option>
                <option value="Mudhol taluk">Mudhol taluk</option>
                <option value="Guledgudda">Guledgudda</option>
            `,
            'BANGALORE RURAL': `
                <option value="">Select Taluk</option>
                <option value="DEVANAHALLI">DEVANAHALLI</option>
                <option value="DODDABALLAPURA">DODDABALLAPURA</option>
                <option value="HOSAKOTE">HOSAKOTE</option>
                <option value="NELAMANGALA">NELAMANGALA</option>
            `,
            'BANGALORE URBAN': `
                <option value="">Select Taluk</option>
                <option value="BANGALORE NORTH">BANGALORE NORTH</option>
                <option value="BANGALORE EAST">BANGALORE EAST</option>
                <option value="BANGALORE SOUTH">BANGALORE SOUTH</option>
                <option value="YELAHANKA">YELAHANKA</option>
                <option value="ANEKAL">ANEKAL</option>
            `,
            'BELGAUM': `
                <option value="">Select Taluk</option>
                <option value="ATHANI">ATHANI</option>
                <option value="BELGAUM">BELGAUM</option>
                <option value="CHIKKODI">CHIKKODI</option>
                <option value="GOKAK">GOKAK</option>
                <option value="HUKKERI">HUKKERI</option>
                <option value="KHANAPUR">KHANAPUR</option>
                <option value="RAMDURG">RAMDURG</option>
                <option value="RAIBAG">RAIBAG</option>
                <option value="SAVADATTI">SAVADATTI</option>
                <option value="BAILHONGAL">BAILHONGAL</option>
                <option value="NIPANI">NIPANI</option>
                <option value="MUDALAGI">MUDALAGI</option>
            `,
            'BELLARY': `
                <option value="">Select Taluk</option>
                <option value="BELLARY">BELLARY</option>
                <option value="HOSPET">HOSPET</option>
                <option value="SANDUR">SANDUR</option>
                <option value="SIRUGUPPA">SIRUGUPPA</option>
                <option value="HAGARIBOMMANAHALLI">HAGARIBOMMANAHALLI</option>
                <option value="HADAGALI">HADAGALI</option>
                <option value="KUDLIGI">KUDLIGI</option>
                <option value="KOTTUR">KOTTUR</option>
            `,
            'BIDAR': `
                <option value="">Select Taluk</option>
                <option value="BIDAR">BIDAR</option>
                <option value="HUMNABAD">HUMNABAD</option>
                <option value="BASAVAKALYAN">BASAVAKALYAN</option>
                <option value="BHALKI">BHALKI</option>
                <option value="AURAD">AURAD</option>
            `,
            'BIJAPUR': `
                <option value="">Select Taluk</option>
                <option value="BIJAPUR">BIJAPUR</option>
                <option value="INDI">INDI</option>
                <option value="SINDAGI">SINDAGI</option>
                <option value="BASAVANA BAGEWADI">BASAVANA BAGEWADI</option>
                <option value="MUDDEBIHAL">MUDDEBIHAL</option>
                <option value="DEVAR HIPPARGI">DEVAR HIPPARGI</option>
            `,
            'CHAMARAJANAGARA': `
                <option value="">Select Taluk</option>
                <option value="CHAMARAJANAGAR">CHAMARAJANAGAR</option>
                <option value="GUNDLUPET">GUNDLUPET</option>
                <option value="KOLLEGAL">KOLLEGAL</option>
                <option value="YELANDUR">YELANDUR</option>
            `,
            'CHIKKABALLAPUR': `
                <option value="">Select Taluk</option>
                <option value="CHIKKABALLAPUR">CHIKKABALLAPUR</option>
                <option value="GOWRIBIDANUR">GOWRIBIDANUR</option>
                <option value="BAGEPALLI">BAGEPALLI</option>
                <option value="SIDLAGHATTA">SIDLAGHATTA</option>
                <option value="CHINTAMANI">CHINTAMANI</option>
                <option value="SHIDLAGHATTA">SHIDLAGHATTA</option>
            `,
            'CHIKMAGALUR': `
                <option value="">Select Taluk</option>
                <option value="CHIKMAGALUR">CHIKMAGALUR</option>
                <option value="KADUR">KADUR</option>
                <option value="TARIKERE">TARIKERE</option>
                <option value="KOPPA">KOPPA</option>
                <option value="NARASIMHARAJAPUR">NARASIMHARAJAPUR</option>
                <option value="MUDIGERE">MUDIGERE</option>
                <option value="SRINGERI">SRINGERI</option>
                <option value="AJJAMPURA">AJJAMPURA</option>
            `,
            'CHITRADURGA': `
                <option value="">Select Taluk</option>
                <option value="CHITRADURGA">CHITRADURGA</option>
                <option value="HIRIYUR">HIRIYUR</option>
                <option value="HOSADURGA">HOSADURGA</option>
                <option value="HOLALKERE">HOLALKERE</option>
                <option value="MOLAKALMURU">MOLAKALMURU</option>
                <option value="CHALLAKERE">CHALLAKERE</option>
            `,
            'DAKSHINA KANNADA': `
                <option value="">Select Taluk</option>
                <option value="MANGALORE">MANGALORE</option>
                <option value="BANTWAL">BANTWAL</option>
                <option value="PUTTUR">PUTTUR</option>
                <option value="BELTHANGADY">BELTHANGADY</option>
                <option value="SULLIA">SULLIA</option>
                <option value="KADABA">KADABA</option>
                <option value="MOODBIDRI">MOODBIDRI</option>
                <option value="VITTAL">VITTAL</option>
            `,
            'DAVANAGERE': `
                <option value="">Select Taluk</option>
                <option value="DAVANAGERE">DAVANAGERE</option>
                <option value="HARIHAR">HARIHAR</option>
                <option value="JAGALUR">JAGALUR</option>
                <option value="HONNALI">HONNALI</option>
                <option value="CHANNAGIRI">CHANNAGIRI</option>
                <option value="HARAPANAHALLI">HARAPANAHALLI</option>
            `,
            'DHARWAD': `
                <option value="">Select Taluk</option>
                <option value="DHARWAD">DHARWAD</option>
                <option value="HUBLI">HUBLI</option>
                <option value="KALGHATGI">KALGHATGI</option>
                <option value="NAVALGUND">NAVALGUND</option>
                <option value="KUNDGOL">KUNDGOL</option>
                <option value="ALNAVAR">ALNAVAR</option>
            `,
            'GADAG': `
                <option value="">Select Taluk</option>
                <option value="GADAG">GADAG</option>
                <option value="MUNDARGI">MUNDARGI</option>
                <option value="NARGUND">NARGUND</option>
                <option value="RON">RON</option>
                <option value="SHIRAHATTI">SHIRAHATTI</option>
            `,
            'HASSAN': `
                <option value="">Select Taluk</option>
                <option value="HASSAN">HASSAN</option>
                <option value="ARASIKERE">ARASIKERE</option>
                <option value="CHANNARAYAPATNA">CHANNARAYAPATNA</option>
                <option value="SAKALESHPUR">SAKALESHPUR</option>
                <option value="BELUR">BELUR</option>
                <option value="HOLENARASIPUR">HOLENARASIPUR</option>
                <option value="ALUR">ALUR</option>
                <option value="ARKALGUD">ARKALGUD</option>
            `,
            'HAVERI': `
                <option value="">Select Taluk</option>
                <option value="HAVERI">HAVERI</option>
                <option value="BYADGI">BYADGI</option>
                <option value="HANGAL">HANGAL</option>
                <option value="HIREKERUR">HIREKERUR</option>
                <option value="RANEBENNUR">RANEBENNUR</option>
                <option value="SHIGGAON">SHIGGAON</option>
                <option value="SAVANUR">SAVANUR</option>
                <option value="RATTIHALLI">RATTIHALLI</option>
            `,
            'KALABURAGI': `
                <option value="">Select Taluk</option>
                <option value="KALABURAGI">KALABURAGI</option>
                <option value="CHITTAPUR">CHITTAPUR</option>
                <option value="SEDAM">SEDAM</option>
                <option value="SHAHAPUR">SHAHAPUR</option>
                <option value="JEWARGI">JEWARGI</option>
                <option value="ALAND">ALAND</option>
                <option value="AFZALPUR">AFZALPUR</option>
                <option value="KALGI">KALGI</option>
            `,
            'KODAGU': `
                <option value="">Select Taluk</option>
                <option value="MADIKERI">MADIKERI</option>
                <option value="VIRAJPET">VIRAJPET</option>
                <option value="SOMWARPET">SOMWARPET</option>
            `,
            'KOLAR': `
                <option value="">Select Taluk</option>
                <option value="KOLAR">KOLAR</option>
                <option value="BANGARAPET">BANGARAPET</option>
                <option value="MULBAGAL">MULBAGAL</option>
                <option value="SRINIVASPUR">SRINIVASPUR</option>
                <option value="MALUR">MALUR</option>
            `,
            'KOPPAL': `
                <option value="">Select Taluk</option>
                <option value="KOPPAL">KOPPAL</option>
                <option value="GANGAVATHI">GANGAVATHI</option>
                <option value="KUSHTAGI">KUSHTAGI</option>
                <option value="YELBURGA">YELBURGA</option>
                <option value="KUKANOOR">KUKANOOR</option>
            `,
            'MANDYA': `
                <option value="">Select Taluk</option>
                <option value="MANDYA">MANDYA</option>
                <option value="PANDAVAPURA">PANDAVAPURA</option>
                <option value="KRISHNARAJAPET">KRISHNARAJAPET</option>
                <option value="NAGAMANGALA">NAGAMANGALA</option>
                <option value="MALAVALLI">MALAVALLI</option>
                <option value="SHRIRANGAPATNA">SHRIRANGAPATNA</option>
                <option value="MADHUGIRI">MADHUGIRI</option>
                <option value="TIPTUR">TIPTUR</option>
            `,
            'MYSORE': `
                <option value="">Select Taluk</option>
                <option value="MYSORE">MYSORE</option>
                <option value="NANJANGUD">NANJANGUD</option>
                <option value="HUNSUR">HUNSUR</option>
                <option value="KRISHNARAJANAGAR">KRISHNARAJANAGAR</option>
                <option value="PIRYAPATNA">PIRYAPATNA</option>
                <option value="TIRUMAKUDALU NARASIPUR">TIRUMAKUDALU NARASIPUR</option>
                <option value="SALIGRAMA">SALIGRAMA</option>
            `,
            'RAICHUR': `
                <option value="">Select Taluk</option>
                <option value="RAICHUR">RAICHUR</option>
                <option value="DEODURGA">DEODURGA</option>
                <option value="SINDHANUR">SINDHANUR</option>
                <option value="LINGASUGUR">LINGASUGUR</option>
                <option value="MANVI">MANVI</option>
                <option value="MASKI">MASKI</option>
            `,
            'RAMANAGARA': `
                <option value="">Select Taluk</option>
                <option value="RAMANAGARA">RAMANAGARA</option>
                <option value="CHANNAPATNA">CHANNAPATNA</option>
                <option value="KANAKAPURA">KANAKAPURA</option>
                <option value="MAGADI">MAGADI</option>
            `,
            'SHIVAMOGGA': `
                <option value="">Select Taluk</option>
                <option value="SHIVAMOGGA">SHIVAMOGGA</option>
                <option value="BHADRAVATHI">BHADRAVATHI</option>
                <option value="THIRTHAHALLI">THIRTHAHALLI</option>
                <option value="SHIKARIPURA">SHIKARIPURA</option>
                <option value="SAGAR">SAGAR</option>
                <option value="HOSANAGARA">HOSANAGARA</option>
                <option value="SORABA">SORABA</option>
            `,
            'TUMKUR': `
                <option value="">Select Taluk</option>
                <option value="TUMKUR">TUMKUR</option>
                <option value="KUNIGAL">KUNIGAL</option>
                <option value="TIPTUR">TIPTUR</option>
                <option value="TURUVEKERE">TURUVEKERE</option>
                <option value="CHIKKANAYAKANAHALLI">CHIKKANAYAKANAHALLI</option>
                <option value="GUBBI">GUBBI</option>
                <option value="KORATAGERE">KORATAGERE</option>
                <option value="MADHUGIRI">MADHUGIRI</option>
                <option value="SIRA">SIRA</option>
                <option value="PAVAGADA">PAVAGADA</option>
            `,
            'UDUPI': `
                <option value="">Select Taluk</option>
                <option value="UDUPI">UDUPI</option>
                <option value="KUNDAPURA">KUNDAPURA</option>
                <option value="KARKALA">KARKALA</option>
            `,
            'UTTAR KANNADA': `
                <option value="">Select Taluk</option>
                <option value="KARWAR">KARWAR</option>
                <option value="SIDDAPUR">SIDDAPUR</option>
                <option value="SIRSI">SIRSI</option>
                <option value="MUNDGOD">MUNDGOD</option>
                <option value="HONNAVAR">HONNAVAR</option>
                <option value="ANKOLA">ANKOLA</option>
                <option value="DHARWAD">DHARWAD</option>
                <option value="KUMTA">KUMTA</option>
                <option value="Bhatkal">BHATKAL</option>
            `,
            'YADAGIR': `
                <option value="">Select Taluk</option>
                <option value="YADAGIR">YADAGIR</option>
                <option value="SHAHAPUR">SHAHAPUR</option>
                <option value="SHORAPUR">SHORAPUR</option>
            `
        };
        
        talukSelect.innerHTML = taluks[this.value] || '<option value="">Select Taluk</option>';
        document.getElementById('talukGroup').classList.remove('hidden');
    }
});

        document.getElementById('proceedBtn').classList.remove('hidden');


// Event listener to proceed to the map
document.getElementById('proceedBtn').addEventListener('click', function() {
    document.getElementById('locationSelection').classList.add('hidden');
    document.getElementById('mapContainer').classList.remove('hidden');
    initializeMap();
});

// Toggle language
document.getElementById('toggleLang').addEventListener('click', function() {
    var langText = this.textContent.trim();
    if (langText === 'Toggle to Kannada') {
        this.textContent = 'Toggle to English';
        // Add logic to toggle language here
    } else {
        this.textContent = 'Toggle to Kannada';
        // Add logic to toggle language here
    }
});

// Initialize the map
function initializeMap() {
    var map = L.map('map').setView([13.0072, 76.0962], 13); // Set view to Hassan

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        },
        draw: {
            polygon: {
                allowIntersection: false,
                showArea: true
            }
        }
    });
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        drawnItems.addLayer(layer);

        var area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
        displayArea(area);
    });
}

// Display the calculated area
function displayArea(area) {
    var acres = area * 0.000247105; // Convert square meters to acres
    var gunta = acres * 40; // Convert acres to gunta
    var sqFeet = area * 10.7639; // Convert square meters to square feet

    var areaTable = `
        <table>
            <tr>
                <th>Unit</th>
                <th>Area</th>
            </tr>
            <tr>
                <td>Square Meters</td>
                <td>${area.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Acres</td>
                <td>${acres.toFixed(4)}</td>
            </tr>
            <tr>
                <td>Gunta</td>
                <td>${gunta.toFixed(4)}</td>
            </tr>
            <tr>
                <td>Square Feet</td>
                <td>${sqFeet.toFixed(2)}</td>
            </tr>
        </table>
    `;
    document.getElementById('area').innerHTML = areaTable;
}