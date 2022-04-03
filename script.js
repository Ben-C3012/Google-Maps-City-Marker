
// NYC Ifram
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332355.8168591605!2d-73.96124192704453!3d40.76980219781367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1648975721482!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//  Montreal 
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529742.347663434!2d-73.41313426046398!3d45.38172059426953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sil!4v1648976040579!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// Napoli 
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d568400.0287564474!2d13.94066067429429!3d41.09366957319391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0a3c328d896b%3A0x309e11f99628150!2sMetropolitan%20City%20of%20Naples%2C%20Italy!5e0!3m2!1sen!2sil!4v1648976301835!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

// Get next Button 
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const iFrame = document.querySelector('iframe')


// Event listener for next button 
nextBtn.addEventListener('click', nextLocation)
prevBtn.addEventListener('click', prevLocation)

// Location sources 
const tokyoSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009801.3344493931!2d139.70091078695492!3d36.12954621111761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sil!4v1648974602963!5m2!1sen!2sil'
const nycSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332355.8168591605!2d-73.96124192704453!3d40.76980219781367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sil!4v1648975721482!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
const montrealSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529742.347663434!2d-73.41313426046398!3d45.38172059426953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sil!4v1648976040579!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
const napoliSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d568400.0287564474!2d13.94066067429429!3d41.09366957319391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0a3c328d896b%3A0x309e11f99628150!2sMetropolitan%20City%20of%20Naples%2C%20Italy!5e0!3m2!1sen!2sil!4v1648976301835!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

// Location number variable
let locationNumber = 0



prevBtn.disabled = true



// next location function 
function nextLocation() {
    // Increment location number 
    locationNumber++

    switch (locationNumber) {
        case 1:
            iFrame.src = nycSrc
            break
        case 2:
            iFrame.src = montrealSrc
            break
        case 3:
            iFrame.src = napoliSrc
            break
    }

    // disable next button if you are on Napoli 
    if(locationNumber === 3){
        nextBtn.disabled = true
    }

    // enbale prev button if you are not in Tokyo 
    if(locationNumber !== 0) {
        prevBtn.disabled = false
    }

   
 
    
}


// Previous location function 
function prevLocation() {
    locationNumber--

    switch (locationNumber) {
        case 0:
           iFrame.src = tokyoSrc
           break
        case 1:
            iFrame.src = nycSrc
            break
        case 2:
            iFrame.src = montrealSrc
            break
        case 3:
            iFrame.src = napoliSrc
            break
    }

// DO NOT disable next button if you are on anything that is not Napoli
if(locationNumber !== 3) {
    nextBtn.disabled = false
}

// if you are on tokyo diable button 
if(locationNumber === 0) {
    prevBtn.disabled = true
}


}





