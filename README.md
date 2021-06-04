# fastcoin-rates-api
Author -  <contact@fastcoin-project.com> 2021

Get minutely Fastcoin rate in every major national currency form

# Installation


## First, update your package manager.
```
sudo apt-get update -y
```

# Next

## Dependencies (ubuntu):
bash
```
sudo apt install python python3 build-essential
```
```
sudo apt-get install npm
```

## Install Nodejs

Best practices for installing nodejs is to use nvm (to manage nodejs installs). So install nvm by doing this:
bash
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
```
export NVM_DIR="$HOME/.nvm"
```
```
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
```
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Then install nodejs v10.x (latest) via nvm, by doing the following:
bash
```
nvm install v10
```

## Install PM2
```
sudo npm i -g pm2 
```

## Generate a startup script
To get the automatically-configured startup script for your machine you need to type this command:

Detect available init system, generate configuration and enable startup system
```
pm2 startup
```

# Clone the repo and start the service 
```
git clone https://github.com/fastcoin-project/fastcoin-rates-api.git
cd fastcoin-rates-api
npm i
```

Create a file called start.yaml in the directory above sumcoin-rates-api with the following:

apps:
  - script   : ./fastcoin-rates-api/main.js
    name     : 'fastcoin-rates-api'

then...
bash
```
pm2 start start.yaml
```
then you should save your pm2 state:
bash
```
pm2 save
```
then set iptables prerouting:
bash
```
sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 4001
sudo iptables -t nat -I PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 4002
```

# FST Price in Currencies supported as of June 2021

 "USD"
        "symbol": "$",
        "name": "US Dollar",
  
    "CAD": {
        "symbol": "CA$",
        "name": "Canadian Dollar",

    "EUR": {
        "symbol": "€",
        "name": "Euro",
 
    "AED"
        "name": "United Arab Emirates Dirham",

    "AFN",
        "name": "Afghan Afghani",
  
    "ALL"
        "name": "Albanian Lek",
  
    "AMD"
        "name": "Armenian Dram",
   
    "ARS"
        "name": "Argentine Peso",
 
    "AUD"
        "name": "Australian Dollar",
 
    "AZN"
        "name": "Azerbaijani Manat",
  
    "BAM"
        "name": "Bosnia-Herzegovina Convertible Mark",
   
    "BDT"
        "name": "Bangladeshi Taka",
  
    "BGN"
        "name": "Bulgarian Lev",
  
    "BHD"
        "name": "Bahraini Dinar",
  
    "BIF"
        "name": "Burundian Franc",
  
    "BND"
        "name": "Brunei Dollar",
  
    "BOB"
        "name": "Bolivian Boliviano",
 
    "BRL"
        "name": "Brazilian Real",

    "BWP"
        "name": "Botswanan Pula",
   
    "BYR"
        "name": "Belarusian Ruble",
   
    "BZD"
        "name": "Belize Dollar",
 
    "CDF"
        "name": "Congolese Franc",
   
    "CHF"
        "name": "Swiss Franc",
   
    "CLP"
        "name": "Chilean Peso",
  
    "CNY"
        "name": "Chinese Yuan",
   
    "COP"
        "name": "Colombian Peso",
   
    "CRC"
        "name": "Costa Rican Colón",
    
    "CVE"
        "name": "Cape Verdean Escudo",
    
    "CZK"
        "name": "Czech Republic Koruna",
    
    "DJF"
        "name": "Djiboutian Franc",
   
    "DKK"
        "name": "Danish Krone",
  
    "DOP"
        "name": "Dominican Peso",
   
    "DZD"
        "name": "Algerian Dinar",
   
    "EEK"
        "name": "Estonian Kroon",
  
    "EGP"
        "name": "Egyptian Pound",
   
    "ERN"
        "name": "Eritrean Nakfa",
  
    "ETB"
        "name": "Ethiopian Birr",
  
    "GBP"
        "name": "British Pound Sterling",
 
    "GEL"
        "name": "Georgian Lari",
  
    "GHS"
        "name": "Ghanaian Cedi",
  
    "GNF"
        "name": "Guinean Franc",
  
    "GTQ"
        "name": "Guatemalan Quetzal",
  
    "HKD"
        "name": "Hong Kong Dollar",
 
    "HNL"
        "name": "Honduran Lempira",
   
    "HRK"
        "name": "Croatian Kuna",
   
    "HUF"
        "name": "Hungarian Forint",
        
    "IDR"
        "name": "Indonesian Rupiah",

    "ILS"
        "name": "Israeli New Sheqel",
  
    "INR"
        "name": "Indian Rupee",
 
    "IQD"
        "name": "Iraqi Dinar",
 
    "IRR"
        "name": "Iranian Rial",
   
    "ISK"
        "name": "Icelandic Króna",
  
    "JMD"
        "name": "Jamaican Dollar",

    "JOD"
        "name": "Jordanian Dinar",
 
    "JPY"
        "name": "Japanese Yen",

    "KES"
        "name": "Kenyan Shilling",

    "KHR"
        "name": "Cambodian Riel",
 
    "KMF"
        "name": "Comorian Franc",

    "KRW"
        "name": "South Korean Won",

    "KWD"
        "name": "Kuwaiti Dinar",

    "KZT"
        "name": "Kazakhstani Tenge",
 
    "LBP"
        "name": "Lebanese Pound",

    "LKR"
        "name": "Sri Lankan Rupee",

    "LTL"
        "name": "Lithuanian Litas",

    "LVL"
        "name": "Latvian Lats",

    "LYD"
        "name": "Libyan Dinar",

    "MAD"
        "name": "Moroccan Dirham",

    "MDL"
        "name": "Moldovan Leu",

    "MGA"
        "name": "Malagasy Ariary",

    "MKD"
        "name": "Macedonian Denar",

    "MMK"
        "name": "Myanma Kyat",

    "MOP"
        "name": "Macanese Pataca",

    "MUR"
        "name": "Mauritian Rupee",

    "MXN"
        "name": "Mexican Peso",

    "MYR"
        "name": "Malaysian Ringgit",

    "MZN"
        "name": "Mozambican Metical",

    "NAD"
        "name": "Namibian Dollar",

    "NGN"
        "name": "Nigerian Naira",

    "NIO"
        "name": "Nicaraguan Córdoba",

    "NOK"
        "name": "Norwegian Krone",

    "NPR"
        "name": "Nepalese Rupee",

    "NZD"
        "name": "New Zealand Dollar",

    "OMR"
        "name": "Omani Rial",

    "PAB"
        "name": "Panamanian Balboa",

    "PEN"
        "name": "Peruvian Nuevo Sol",

    "PHP"
        "name": "Philippine Peso",

    "PKR"
        "name": "Pakistani Rupee",

    "PLN"
        "name": "Polish Zloty",

    "PYG"
        "name": "Paraguayan Guarani",

    "QAR"
        "name": "Qatari Rial",

    "RON"
        "name": "Romanian Leu",

    "RSD"
        "name": "Serbian Dinar",

    "RUB"
        "name": "Russian Ruble",

    "RWF"
        "name": "Rwandan Franc",

    "SAR"
        "name": "Saudi Riyal",
  
    "SDG"
        "name": "Sudanese Pound",
   
    "SEK"
        "name": "Swedish Krona",
  
    "SGD"
        "name": "Singapore Dollar",
   
    "SOS"
        "name": "Somali Shilling",
   
    "SYP"
        "name": "Syrian Pound",
    
    "THB"
        "name": "Thai Baht",
  
    "TND"
        "name": "Tunisian Dinar",
  
    "TOP"
        "name": "Tongan Paʻanga",
    
    "TRY"
        "name": "Turkish Lira",
 
    "TTD"
        "name": "Trinidad and Tobago Dollar",
   
    "TWD"
        "name": "New Taiwan Dollar",
  
    "TZS"
        "name": "Tanzanian Shilling",
     
    "UAH"
        "name": "Ukrainian Hryvnia",
   
    "UGX"
        "name": "Ugandan Shilling",
    
    "UYU"
        "name": "Uruguayan Peso",
      
    "UZS"
        "name": "Uzbekistan Som",
    
    "VEF"
        "name": "Venezuelan Bolívar",
   
    "VND"
        "name": "Vietnamese Dong",
      
    "XAF"
        "name": "CFA Franc BEAC",
       
    "XOF"
        "name": "CFA Franc BCEAO",
   
    "YER"
        "name": "Yemeni Rial",
       
    "ZAR"
        "name": "South African Rand",
      
    "ZMK"
        "name": "Zambian Kwacha",
