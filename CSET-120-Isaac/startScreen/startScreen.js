

//link to html div
var bod = document.getElementById('guildStart');
//style
Object.assign(bod.style,{
    width: '100%',
    height: '100%',
    position: 'relative'//to center

});

function addItem() {
    items++;
    updateCartDisplay();
}

//subtotal variable 
let subTotal = 0.00;

// Function to add a price to the subtotal
function addSubTotal(price) {
    if (typeof price === 'number' && price >= 0) {
        subTotal += price; 
        updateSubtotalDisplay(); 
        console.log(`Added price: ${price}. New subtotal: ${subTotal.toFixed(2)}`); 
    } else {
        console.error('Invalid price:', price); 
    }
}

// Function to update the subtotal display in the DOM
function updateSubtotalDisplay() {
    const cartTotal = document.getElementById('cart-total_0');
    if (cartTotal) {
        cartTotal.innerHTML = '$'+subTotal.toFixed(2); 
    } else {
        console.error('Cart total element not found!');
    }

    const cartTotal1 = document.getElementById('cart-total_1');
    if (cartTotal1) {
        cartTotal1.innerHTML = '$'+subTotal.toFixed(2); 
    } else {
        console.error('Cart total element not found!');
    }

    const cartTotal2 = document.getElementById('cart-total_2');
    if (cartTotal2) {
        cartTotal2.innerHTML = '$'+subTotal.toFixed(2); 
    } else {
        console.error('Cart total element not found!');
    }
}

//item stuff
let items = 0;
function updateCartDisplay() {
    cartItemCount.innerHTML = items;
}

//cart array to add to cart 
var cartArray = [];

//nav background array
var navBackground = ['url(../IMG/nav_img_0.svg)','url(../IMG/nav_img_1svg.svg)','url(../IMG/nav_img_3.svg)','url(../IMG/nav_img_2.svg)','url(../IMG/nav_img_4.svg)','url(../IMG/nav_img_5.svg)','url(../IMG/nav_img_6.svg)','url(../IMG/nav_img_7.svg)','url(../IMG/nav_img_8.svg)'];

//create array for all navText innerhtml
var navTextInner = ['Sign up', 'Login','View Menu','Specials','Gift Shop','Events','About Us','Reservations','Careers'];

//create header for page
var siteHeader = document.createElement('div');
//placement
bod.appendChild(siteHeader);
//style
Object.assign(siteHeader.style,{
    width: '700px',
    height: '200px',
    // border: 'black solid 1px',
    margin: 'auto',
    marginTop: '3px',
    display: 'flex',
    backgroundAttachment: 'fixed'
   
});

//create logo for the site
var logo = document.createElement('div');
//placement=
siteHeader.appendChild(logo);
//style
Object.assign(logo.style,{
    width: '200px',
    height: '200px',
    // border: '1px red solid',
    borderRadius: '120px',
    backgroundImage: 'url(../IMG/restaurant_guild_log.webp)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: '12px 12px 12px rgba(0, 0, 0, 0.4)',
    transition: 'width 0.3s height 0.3s',
    backgroundColor: 'black'

});

//define media query
var mediaQuery = window.matchMedia('(max-width: 480px)');

//media query function 
function mediaQueryChange(event){
    if(event.matches){
        //if viewport is 600px or smaller
        Object.assign(logo.style,{
            width: '230px',
            height: '220px',
            margin: 'auto',
            marginTop: '13px'
        });
        Object.assign(siteHeader.style,{
            width: '100%',
            height: '',
            backgroundColor: 'white',
              flexDirection: 'column',
              margin: 'auto'
        });
           Object.assign(navHolder.style,{
            display: 'none'
           });
           Object.assign(navHolderMobile.style,{
                display: 'flex'
           });
        

    } else {
        //if view port is larger than 600px
        Object.assign(logo.style,{
            width: '225px',
            height: '225px'
        });
        Object.assign(siteHeader.style,{
            width: '100%',
            backgroundColor: 'white',
             flexDirection: 'row'
            
        });
        Object.assign(navHolder.style,{
            display: 'flex'
           });
           Object.assign(navHolderMobile.style,{
            display: 'none'
       });
    
    
    }
}


//nav holder desktop
var navHolder = document.createElement('div');
//placement
siteHeader.appendChild(navHolder);
//style
Object.assign(navHolder.style,{
    width: '85%',
    height: '200px',
    // border: '1px red solid',
    margin: 'auto',
    marginTop: '23px',
    borderRadius: '23px',
   

});

//nav holder on mobile
var navHolderMobile = document.createElement('div');
//placement
siteHeader.appendChild(navHolderMobile);
//style
Object.assign(navHolderMobile.style,{
    width: '100%',
    height: '72px',
    marginTop: '13px',
    margin: 'auto'

});

//mobile img
var navImgMobile = document.createElement('div');
//placement
navHolderMobile.appendChild(navImgMobile);
//style
Object.assign(navImgMobile.style,{
    width:'53px',
    height: '53px',
    borderRadius: '7px',
    marginLeft: 'auto',
    marginTop: '-52px',
    marginRight: '13px',
    backgroundImage: 'url(../IMG/nav_holder_mobile.svg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '2px black inset',
   
});

//create navDisplay exit btn
var navDisplayExit = document.createElement('div');
//placement
navHolderMobile.appendChild(navDisplayExit);
//style
Object.assign(navDisplayExit.style,{
    width:'53px',
    height: '53px',
    borderRadius: '7px',
    marginLeft: 'auto',
    marginTop: '-52px',
    marginRight: '13px',
    backgroundImage: 'url(../IMG/mobileNavExit.svg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: '2px black inset',
    display: 'none'
   
});

//create array for nav mobile buttons
var navMoblieButtons = [navImgMobile,navDisplayExit];

navMoblieButtons.forEach(navMobileButtonBoi =>{
navMobileButtonBoi.animate(
    [
        {backgroundSize: '71%'},
        {backgroundSize: '73%'},
        {backgroundSize: '76%'},
        {backgroundSize: '79%'},
        {backgroundSize: '76%'},
        {backgroundSize: '73%'},
        {backgroundSize: '72%'},
    ],
    {
        
        duration: 3000,
        ease: 'linear',
        fill: "forwards",
        iterations: Infinity
    }
);
});


navImgMobile.onclick = function displayNavMobile(){
   
    //navImgMobile to display none and navMobileExit display flex
    navImgMobile.style.display = 'none';
    navDisplayExit.style.display = 'flex';

   //display navigation options
    navDisplayMobile.style.display = 'flex';
    

   //animation
    navDisplayMobile.animate(
        [
            {opacity: 0,height: '0',color:'white'},
            {opacity: 1,height: '50%',color: 'black',display:'flex'}
        ],
        {
            iterations: 1,
            duration: 550,
            ease: 'linear',
            fill: 'forwards'
        }
    );
    
}

//onclick for navDisplayExit
navDisplayExit.onclick = function exitNavDisplay(){
     //navImgMobile to display none and navMobileExit display flex
     navImgMobile.style.display = 'flex';
     navDisplayExit.style.display = 'none';
    console.log('nav close');
     //animation nav mobile display
     navDisplayMobile.animate(
        [
            {opacity: 1,height: '50%',color: 'black'},
            {opacity: 0,height: '0',color:'white',display:'none'}
        ],
        {
            iterations: 1,
            duration: 550,
            ease: 'linear',
            fill: 'forwards'
        }
    );



}

//create nav holder display on mobile
var navDisplayMobile = document.createElement('div');
//Placement
bod.appendChild(navDisplayMobile);
//style
Object.assign(navDisplayMobile.style,{
    width: '80%',
    height: '50%',
    // border: 'black 1px solid',
    margin: 'auto',
    display: 'none',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingBottom: '9px',
    
});

var navMob_0 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_0);

var navMob_1 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_1);

var navMob_2 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_2);

var navMob_3 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_3);

var navMob_4 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_4);

var navMob_5 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_5);

var navMob_6 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_6);

var navMob_7 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_7);

var navMob_8 = document.createElement('div');
//placement
navDisplayMobile.appendChild(navMob_8);

//navDisplayMob array
var navDisplayArray = [navMob_0,navMob_2,navMob_3,navMob_4,navMob_5,navMob_6,navMob_7,navMob_8];
//forEach
navDisplayArray.forEach(navDisplayBoi =>{
    Object.assign(navDisplayBoi.style,{
        width: '80%',
        height: '11%',
        border: '1px black solid',
        margin: 'auto',
        marginTop: '3px',
        borderRadius: '12px',
        display: 'flex'
    });
});

//navdisplay mobile image
var navDisplayImg_0 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_1 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_2 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_3 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_4 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_5 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_6 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_7 = document.createElement('div');

//navdisplay mobile image
var navDisplayImg_8 = document.createElement('div');

//nav display image array
var navDisplayImgArray = [navDisplayImg_1,navDisplayImg_2,navDisplayImg_3,navDisplayImg_4,navDisplayImg_5,navDisplayImg_6,navDisplayImg_7,navDisplayImg_8]

//for loop for placement
for(let i = 0; i < navDisplayImgArray.length; i++){
    navDisplayArray[i].appendChild(navDisplayImgArray[i]);
    navDisplayImgArray[i].style.backgroundImage = navBackground[i];
}

//style
navDisplayImgArray.forEach(navDisplayImgBoi =>{
    Object.assign(navDisplayImgBoi.style,{
        width: '33px',
        height: '33px',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        marginLeft: '12px',

    });
});

//create innerHTML for nav displays
var navDisplayText_0 = document.createElement('div');
var navDisplayText_1 = document.createElement('div');
var navDisplayText_2 = document.createElement('div');
var navDisplayText_3 = document.createElement('div');
var navDisplayText_4 = document.createElement('div');
var navDisplayText_5 = document.createElement('div');
var navDisplayText_6 = document.createElement('div');
var navDisplayText_7 = document.createElement('div');
var navDisplayText_8 = document.createElement('div');

var navDisplayTextArray = [navDisplayText_0,navDisplayText_1,navDisplayText_2,navDisplayText_3,navDisplayText_4,navDisplayText_5,navDisplayText_6,navDisplayText_7,navDisplayText_8];


var navinnerHtmlArray = ['Sign up', 'Login','View Menu','Specials','Gift Shop','Events','About Us','Reservations','Careers'];

for(let i = 0; i < navDisplayArray.length; i++){
    //placement
    navDisplayArray[i].appendChild(navDisplayTextArray[i]);
    navDisplayTextArray[i].innerHTML = navinnerHtmlArray[i];
}
//style
navDisplayTextArray.forEach(navDisplayTextBoi =>{
    Object.assign(navDisplayTextBoi.style,{
    //   border: 'red 1px solid',
      width: '160px',
      margin: 'auto',
      marginTop: '0px',
      marginBottom: '0px',
      fontSize: '190%'
    
    });
});


//username on nav//////////////////////////////////////////////////////////////////////////////
var nav_userName = document.createElement('div');
//placement
navHolder.appendChild(nav_userName);
//style
Object.assign(nav_userName.style,{
    width: '10%',
    height: '120px',
    // border: '1px red solid',
    margin: 'auto',
    marginTop: '0',
    marginTop: '40px',
    borderRadius: '23px',
    display: 'none',
    flexDirection: 'column'
   
});

//logut nav
var logOut = document.createElement('div');
//placement
navHolder.appendChild(logOut);
//style
Object.assign(logOut.style,{
    width: '10%',
    height: '120px',
    // border: '1px red solid',
    margin: 'auto',
    marginTop: '0',
    marginTop: '40px',
    borderRadius: '23px',
    display: 'none',
    flexDirection: 'column'
   
});
//logout img
var logOutImg = document.createElement('div');
//placement
logOut.appendChild(logOutImg);
//style
Object.assign(logOutImg.style,{
    width: '53px',
    height: '60px',
    backgroundImage: 'url(../IMG/logout_img.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    // border: '1px red solid',
    backgroundRepeat: 'no-repeat'
});
//logout text
var logOutText = document.createElement('div');
//placement
logOut.appendChild(logOutText);
//style
Object.assign(logOutText.style,{
    width: '53px',
    height: '60px',
    textAlign: 'center',
    fontSize: '160%',
});
logOutText.innerHTML = 'Logout'
//logout event listeners
logOut.addEventListener('mouseover', function () {
    logOut.style.cursor = 'pointer';
      logOutImg.animate(
          [
              {scale : '1'},
              {scale : '1.3'},
              {scale : '1.2'}
          ],
          {
              easing: 'ease-in',
              duration: 500,
              fill: 'forwards'
             
          }
      )
  });
  logOut.addEventListener('mouseout', function () {
    logOutImg.animate(
        [
            {scale : '1.2'},
            {scale : '1'}
        ],
        {
            easing: 'ease-in',
            duration: 200,
            fill: 'forwards'
           
        }
    )
});

//nav 
var nav_0 = document.createElement('div');
//placement
navHolder.appendChild(nav_0);

var nav_1 = document.createElement('div');
//placement
navHolder.appendChild(nav_1);

var nav_2 = document.createElement('div');
//placement
navHolder.appendChild(nav_2);

var nav_3 = document.createElement('div');
//placement
navHolder.appendChild(nav_3);

var nav_4 = document.createElement('div');
//placement
navHolder.appendChild(nav_4);

var nav_5 = document.createElement('div');
//placement
navHolder.appendChild(nav_5);

var nav_6 = document.createElement('div');
//placement
navHolder.appendChild(nav_6);

var nav_7 = document.createElement('div');
//placement
navHolder.appendChild(nav_7);

var nav_8 = document.createElement('div');
//placement
navHolder.appendChild(nav_8);

//make array for nav
var navArray = [nav_0,nav_1,nav_2,nav_3,nav_4,nav_5,nav_6,nav_7,nav_8];


for (let i = 0; i < navArray.length; i++) {
    navArray[i].addEventListener('mouseover', function () {
      navArray[i].style.cursor = 'pointer';
        navImgArray[i].animate(
            [
                {scale : '1'},
                {scale : '1.3'},
                {scale : '1.2'}
            ],
            {
                easing: 'ease-in',
                duration: 500,
                fill: 'forwards'
               
            }
        )
    });
}

for (let i = 0; i < navArray.length; i++) {
    navArray[i].addEventListener('mouseout', function () {
        navImgArray[i].animate(
            [
                {scale : '1.2'},
                {scale : '1'}
            ],
            {
                easing: 'ease-in',
                duration: 200,
                fill: 'forwards'
               
            }
        )
    });
}


    nav_userName.addEventListener('mouseover', function () {
      nav_userName.style.cursor = 'pointer';
        nav_userName.animate(
            [
                {scale : '1'},
                {scale : '1.3'},
                {scale : '1.2'}
            ],
            {
                easing: 'ease-in',
                duration: 500,
                fill: 'forwards'
               
            }
        )
    });

    nav_userName.addEventListener('mouseout', function () {
        nav_userName.animate(
            [
                {scale : '1.2'},
                {scale : '1'}
            ],
            {
                easing: 'ease-in',
                duration: 200,
                fill: 'forwards'
               
            }
        )
    });
    var appPage = document.getElementById('appPage');
    var careerPage = document.getElementById('careerPage');

    nav_8.onclick = function(){
       
        careerPage.style.display = 'flex';
    }

  
    function closeCareerPage(){
        careerPage.style.display = 'none';
    }

    function openApp(){
        careerPage.style.display = 'none';
        appPage.style.display = 'flex';
    }


    function closeAppPage(){
        appPage.style.display = 'none';
    }

  

    var submitApp = document.createElement('div');
bod.appendChild(submitApp);
Object.assign(submitApp.style,{
    width: '500px',
    height: 'fitcontent',
    backgroundImage: 'linear-gradient(salmon,grey)',
    position: 'absolute',
    top: '20%',
    left: '35%',
    borderRadius: '13px', flexDirection: 'column',
    display: 'none'
});

//close page thingy 
var closeSubmitApp = document.createElement('div');
submitApp.appendChild(closeSubmitApp);
Object.assign(closeSubmitApp.style,{
    width: '23px',
    height: '23px',
    borderRadius: '23px',
    border: '3px black solid',
    backgroundImage: 'linear-gradient(black,grey)',
    marginLeft: '97%',
    textAlign: 'center',
    color: 'white',
    marginTop: '-8px',
    cursor: 'pointer'
});
closeSubmitApp.innerHTML = 'X';
closeSubmitApp.addEventListener('mouseover', function(){
    Object.assign(closeSubmitApp.style,{
        color: 'gold',
        borderColor: 'gold'
    });
});
closeSubmitApp.addEventListener('mouseout', function(){
    Object.assign(closeSubmitApp.style,{
        color: 'white',
        borderColor: 'black'
    });
});
closeSubmitApp.onclick = function(){
    submitApp.style.display = 'none';
}

//thank you for your buisness, now scram
var thankYouForApp = document.createElement('div');
submitApp.appendChild(thankYouForApp);
thankYouForApp.innerHTML = 'Thank you for your application, We will be in touch...';
Object.assign(thankYouForApp.style,{
    color: 'white',
    fontSize: '600%',
    textAlign: 'center',
    paddingTop: '53px',
   
});
function submitApplication(){
    appPage.style.display = 'none';
    submitApp.style.display = 'flex';
}

//cart/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////cart//////////////////////////////////////////////////////////////////
var  cart = document.createElement('div');
bod.appendChild(cart);
Object.assign(cart.style,{
    width: '180px',
    height: '300px',
    border: 'outset 8px black',
    position: 'absolute',
    bottom: '-420px',
    left: '1%',
    borderRadius: '18px',
    backgroundImage: 'linear-gradient(black,grey)',
   
});

//cart image
var cartImage = document.createElement('div');
cart.appendChild(cartImage);
Object.assign(cartImage.style,{
    width: '55%',
    height: '120px',
    // border: '1px black solid',
    margin: 'auto',
    marginTop: '15px',
    backgroundImage: 'url(../IMG/cart_gold.svg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
});

//cart item  count
var cartItemCount = document.createElement('div');
cart.appendChild(cartItemCount);
Object.assign(cartItemCount.style,{
    width: '33px',
    height: '33px',
    backgroundColor: 'salmon',
    position: 'absolute',
    borderRadius: '23px',
    left: '85%',
    color: 'white',
    fontSize: '140%',
    textAlign: 'center',
    paddingTop: '4px',
    display: 'flex',
    flexDirection: 'column'

});
cartItemCount.innerHTML = items;

//cart text
var cartText = document.createElement('div');
cart.appendChild(cartText);
Object.assign(cartText.style,{
    width: '145px',
    height: '53px',
    borderBottom: 'gold 1px solid',
    margin: 'auto',
    textAlign: 'center',
    color: 'gold',
    fontSize: '300%'

});
cartText.innerHTML = 'Cart';

//cart total text
var cartTotalText = document.createElement('div');
cart.appendChild(cartTotalText);
Object.assign(cartTotalText.style,{
    width: '145px',
    height: '23px',
    textAlign: 'center',
    color: 'white',
    margin: 'auto',
    fontSize: '140%'
});
cartTotalText.innerHTML = 'TOTAL:';

//cart total
var cartTotal = document.createElement('div');
cart.appendChild(cartTotal);
cartTotal.id = 'cart-total_0'
Object.assign(cartTotal.style,{
    color: 'gold',
    fontSize: '230%',
    marginRight: '7px',
    textAlign: 'right'
});


cart.addEventListener('mouseover',function(){
    cartImage.style.backgroundImage= 'url(../IMG/cart_white.svg)';
    cart.style.cursor= 'pointer';
    cart.animate(
        [
            { backgroundImage: 'linear-gradient(black,grey)',borderColor: 'black'},
            { backgroundImage: 'linear-gradient(grey,black)',borderColor: 'gold'}
        ],
        {
            iterations: '1',
            duration: 200,
            easing: 'linear',
            fill: 'forwards'
        }
    )
});
cart.addEventListener('mouseout',function(){
    cartImage.style.backgroundImage=  'url(../IMG/cart_gold.svg)'
    cart.animate(
        [
            { backgroundImage: 'linear-gradient(grey,black)',borderColor: 'gold'},
            { backgroundImage: 'linear-gradient(black,grey)',borderColor: 'black'}
        ],
        {
            iterations: '1',
            duration: 200,
            easing: 'linear',
            fill: 'forwards'
        }
    )
});

//inside cart////////////////////////////////////////////////////////////////////////////////////////////////////////////////////inside cart page /////////////////////////////////////////////////////////////////
var cartPage = document.createElement('div');
cartPage.id = 'cart_page';
bod.appendChild(cartPage);
Object.assign(cartPage.style,{
    width: '80%',
    height: '700px',
    backgroundColor: 'skyblue',
    position: 'absolute',
    top: '20%',
    left: '15%',
    overFlow: 'hidden',
    display: 'none',
    flexDirection: 'column'
});

//cart header to hold header, search, and menu exit
var cartHeader = document.createElement('div');
//placement
cartPage.appendChild(cartHeader);
//style
Object.assign(cartHeader.style,{
    width: '100%',
    height: '240px',
    borderBottom: 'white 5px inset',
    display: 'flex',
    paddingTop: '23px',
});

//cart exit
var cartClose = document.createElement('div');
cartHeader.appendChild(cartClose);
Object.assign(cartClose.style, {
    width: '33px',
    height: '28px',
    border: '2px gold outset',
    borderRadius: '23px',
    color: 'gold',
    backgroundImage: 'linear-gradient(black,black,grey)',
    textAlign: 'center',
    paddingTop: '5px',
    position: 'absolute',
    left: '99%',
    top: '-2%'
});
cartClose.innerHTML = 'X';

//mouseover cart exit
cartClose.addEventListener('mouseover', function () {
    cartClose.style.cursor = 'pointer';
    cartClose.animate(
        [
            { backgroundImage: 'linear-gradient(black,black,grey)', borderColor: 'gold', color: 'gold' },
            { backgroundImage: 'linear-gradient(grey,white,white)', borderColor: 'black', color: 'black' }
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'linear'
        }
    );
});
cartClose.addEventListener('mouseout', function () {
    cartClose.animate(
        [
            { backgroundImage: 'linear-gradient(grey,white,white)', borderColor: 'black', color: 'black' },
            { backgroundImage: 'linear-gradient(black,black,grey)', borderColor: 'gold', color: 'gold' }
        ],
        {
            iterations: '1',
            duration: 250,
            fill: 'forwards',
            easing: 'linear'
        }
    );
});

cartClose.onclick = function () {
    cartPage.style.display = 'none';
};

//cart h1
var cart_h1 = document.createElement('div');
cartHeader.appendChild(cart_h1);
Object.assign(cart_h1.style,{
    width: '10%',
    height: '150px',
    //  borderRight: '1px blue solid',
    fontSize: '300%',
    marginTop: '-55px',
    backgroundColor: 'skyblue',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    paddingLeft: '7px'
})
cart_h1.innerHTML = 'cart';

//cart total
var cartPageTotal = document.createElement('div');
cartHeader.appendChild(cartPageTotal);
Object.assign(cartPageTotal.style,{
    width: '30%',
    height: '120px',
    fontSize: '300%',
display: 'flex',
flexDirection: 'column'

});
cartPageTotal.innerHTML = 'Cart Total:';

var cartPageTotalDisplay = document.createElement('div');
cartPageTotalDisplay.id = 'cart-total_1';
cartPageTotal.appendChild(cartPageTotalDisplay);
Object.assign(cartPageTotalDisplay.style,{
    width: '153px',
    height: '133px',
    borderBottom: 'white 1px solid',
    margin: 'auto',
    color: 'black',
    fontSize: '120%',
    textAlign: 'right',
});


//aply guild points for discount
var cartPoints = document.createElement('div');
cartHeader.appendChild(cartPoints);
Object.assign(cartPoints.style,{
    width: '30%',
    height:'133px',
    fontSize: '120%',
    display: 'flex',
    flexDirection:'column'
});
cartPoints.innerHTML = 'Guild Points:';

//cart page guild points display
var cartGuildPointsDisplay = document.createElement('div');
cartPoints.appendChild(cartGuildPointsDisplay);
Object.assign(cartGuildPointsDisplay.style,{
     width: '153px',
    height: '33px',
    borderBottom: 'white 1px solid',
    margin: 'auto',
    color: 'black',
    fontSize: '120%',
    textAlign: 'right',
});

//cart total after guild points discount
var discountText = document.createElement('div');
cartPoints.appendChild(discountText);
Object.assign(discountText.style,{
    width: '60%',
    height:'133px',
    fontSize: '120%',
    display: 'flex',
});
discountText.innerHTML = 'Total with guild Points discount:'

//total with discount display
var discountDisplay = document.createElement('div');
cartPoints.appendChild(discountDisplay);
Object.assign(discountDisplay.style,{
    width: '60%',
    height: '83px',
    textAlign: 'right',
    fontSize: '300%'
});


//cart checkpout button holder
var checkout = document.createElement('div');
cartHeader.appendChild(checkout);
Object.assign(checkout.style,{
    width: '20%',
    height: '150px',
    border: 'black 7px outset',
    borderRadius: '23px',
    backgroundImage: 'linear-gradient(black,grey)'
});

//checkout image
var checkoutImage = document.createElement('div');
checkout.appendChild(checkoutImage);
Object.assign(checkoutImage.style,{
    width: '50%',
    height: '70%',
    margin: 'auto',
    backgroundImage: 'url(../IMG/bag_gold.svg)',
    backgroundPosition: 'center',
    backgroundSize:'contain',
    backgroundRepeat: 'no-repeat'
});

//checkout text
var checkoutText = document.createElement('div');
checkout.appendChild(checkoutText);
Object.assign(checkout.style,{
    textAlign: 'center',
   color: 'gold',
    paddingTop: '17px'
});
checkoutText.innerHTML = 'Checkout';
//checkout mouseover mouseout
checkout.addEventListener('mouseover',function(){
    checkout.style.cursor = 'pointer';
    checkout.animate(
        [
            {backgroundImage: 'linear-gradient(black,grey)',borderColor: 'black'},
            {backgroundImage: 'linear-gradient(grey,violet)',borderColor: 'gold'}
        ],
        {
            fill: 'forwards',
            iterations: '1',
            duration: 200,
            easing: 'ease-in-out'
        }
    );
});
checkout.addEventListener('mouseout',function(){
   
    checkout.animate(
        [
            {backgroundImage: 'linear-gradient(grey,violet)',borderColor: 'gold'},
            {backgroundImage: 'linear-gradient(black,grey)',borderColor: 'black'}
        ],
        {
            fill: 'forwards',
            iterations: '1',
            duration: 200,
            easing: 'ease-in-out'
        }
    );
});

checkout.onclick = function(){
    checkoutPage.style.display = 'flex';
    cartPage.style.display = 'none';
}

//create cart inventory div
var inventoryHolder = document.createElement('div');
cartPage.appendChild(inventoryHolder);
Object.assign(inventoryHolder.style,{
    width: '1150px',
    height: '500px',
    margin: 'auto',
    overflowY: 'scroll',
    marginTop: '33px'
});






cart.onclick = function(){
    cartPage.style.display = 'flex';
    menuPage.style.display = 'none';
}

nav_4.onclick= function(){
    giftshopPage.style.display = 'flex';
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////giftshop/////////////////////////////////////////////////////////////////////////////////////////
//giftShop items
var giftshop=[
    {item: 0,name: 'Health Potion', desc:' A radiant red liquid housed in a small, corked glass vial shaped like a heart. This potion glows faintly and is said to revitalize the drinker. Perfect for display or cosplay, it\'s a staple for any adventurer\'s collection.',imgUrl:`../IMG/item_0_img.webp`,price: 200+'gp'},
    {item: 1,name: 'Magic Potion', desc:'A swirling, deep purple liquid stored in an ornate, crescent moon-shaped vial. Topped with a glittering stopper, this potion is rumored to enhance creativity and spark magical inspiration for its owner.',imgUrl:`../IMG/item_1_img.webp`,price: 200+'gp'},
    {item: 2,name: 'Stanima potion', desc:'This golden-yellow potion, encased in a rugged, round glass bottle, exudes energy. Ideal for those needing a motivational boost, it symbolizes endurance and perseverance.',imgUrl:`../IMG/item_2_img.webp`,price: 200+'gp'},
    {item: 3,name: ' Adventure Tokens', desc:'Small, enchanted metallic coins engraved with mystical symbols and phrases like “Luck,” “Courage,” and “Wisdom.” These tokens are carried by travelers as charms for safe journeys or as mementos of grand adventures.',imgUrl:`../IMG/item_3_img.webp`,price: 100+'gp'},
    {item: 4,name: 'Crystal Ball', desc:'A beautifully clear orb resting on a pedestal adorned with tiny magical runes. It’s said that if you stare into its depths long enough, you may catch a glimpse of your destiny—or just a mesmerizing swirl of glittery fog.',imgUrl:`../IMG/item_4_img.webp`,price: 500+'gp'},
    {item: 5,name: ' Deer Artwork', desc:'A serene, magical painting of a glowing deer standing in a moonlit forest. The artwork is framed with wood from the mystical Darkwood Forest, making it a rare collector\'s piece.',imgUrl:`../IMG/item_5_img.webp`,price: 300+'gp'},
    {item: 6,name:'Dragon figure', desc:'An intricately crafted dragon figurine, available in multiple poses—soaring, resting, or guarding a treasure. Painted with shimmering scales and glowing eyes, it’s a must-have for dragon enthusiasts.',imgUrl:`../IMG/item_6_img.webp`,price: 700+'gp'},
    {item: 7,name: 'Dragon keychains', desc:'Dragons fly in the sky and live in dark caves, but what if you had one on a keychain? ',imgUrl:`../IMG/item_7_img.webp`,price: 300+'gp'},
    {item: 8,name: ' Goblin Artwork', desc:' A quirky, detailed depiction of goblins engaging in mischief. The vibrant colors and whimsical expressions make it a favorite for fans of the mischievous creatures.',imgUrl:`../IMG/item_8_img.webp`,price: 300+'gp'},
    {item: 9,name:'Goblin figure', desc:' A comical but charming goblin figure made of enchanted resin, capturing the sly grin and mischievous aura of these iconic fantasy creatures.',imgUrl:`../IMG/item_9_img.webp`,price: 700+'gp'},
    {item: 10,name:'Knight Artwork', desc:' A bold illustration of a valiant knight in gleaming armor, standing triumphantly with a sword raised. The artwork captures the essence of chivalry and adventure, making it a centerpiece for any heroic collection.',imgUrl:`../IMG/item_10_img.webp`,price: 300+'gp'},
    {item: 11,name:'Orc figure', desc:'A fearsome orc warrior wielding a massive axe, sculpted with intricate details like battle scars and rugged armor. Perfect for tabletop games or as a collectible.',imgUrl:`../IMG/item_11_img.webp`,price: 700+'gp'},
    {item: 12,name:'Plush Dragons', desc:' Soft, cuddly dragons available in various colors and sizes. Each plush comes with its own story tag detailing its mythical background and personality traits.',imgUrl:`../IMG/item_12_img.webp`,price: 500+'gp'},
    {item: 13,name:'Plush Fawns', desc:' Adorable, enchanted fawn plushies with tiny antlers and a soft, magical glow when hugged. Great for kids and adults who love gentle forest creatures.',imgUrl:`../IMG/item_13_img.webp`,price: 500+'gp'},
    {item: 14,name:'Potion Necklace', desc:'Miniature potions encased in tiny glass bottles and hung on delicate chains. Available in various colors like ruby red (health), sapphire blue (magic), and emerald green (stamina), they’re wearable magical charms.',imgUrl:`../IMG/item_14_img.webp`,price: 250+'gp'},
    {item: 15,name:'Runestone sets', desc:'A set of smooth, carved stones etched with runic symbols, each said to hold a specific power like protection, guidance, or prosperity. Comes in a velvet pouch with instructions for divination.',imgUrl:`../IMG/item_15_img.webp`,price: 800+'gp'},
    {item: 16,name:' Sweater', desc:'A cozy, enchanted sweater embroidered with runes and symbols representing the Restaurant Guild. Available in multiple sizes and colors, it’s perfect for staying warm on an adventure.',imgUrl:`../IMG/item_16_img.webp`,price: 420+'gp'},
    {item: 17,name: 'T-shirt', desc:' A casual, magical T-shirt featuring the Restaurant Guild logo and a fun phrase like, “Where Adventurers Feast.” Comes in a variety of styles, including glow-in-the-dark prints.',imgUrl:`../IMG/item_17_img.webp`,price: 420+'gp'}
]

//giftshop page
var giftshopPage = document.createElement('div');
//placement
bod.appendChild(giftshopPage);
//id 
giftshopPage.id = 'giftshop_page';
//style
Object.assign(giftshopPage.style,{
    width: '80%',
    height: '900px',
    backgroundColor: 'indigo',
    position: 'absolute',
    top: '15%',
    left: '15%',
    overFlow: 'hidden',
    display: 'none',
    flexDirection: 'column'
});

//giftshop header to hold header, search, and giftshop exit
var giftshopHeader = document.createElement('div');
//placement
giftshopPage.appendChild(giftshopHeader);
//style
Object.assign(giftshopHeader.style,{
    width: '100%',
    height: '200px',
    borderBottom: 'white 5px inset',
    display: 'flex',
    paddingTop: '23px',
});

//giftshop exit
var giftshopClose = document.createElement('div');
giftshopHeader.appendChild(giftshopClose);
Object.assign(giftshopClose.style,{
    width: '33px',
    height: '28px',
    border: '2px gold outset',
    borderRadius: '23px',
    color: 'gold',
    backgroundImage: 'linear-gradient(black,black,grey)',
    textAlign: 'center',
    paddingTop: '5px',
    position: 'absolute',
    left: '99%',
    top: '-2%'
});
giftshopClose.innerHTML = 'X';

//mouseover giftshop exit
giftshopClose.addEventListener('mouseover',function(){
    giftshopClose.style.cursor = 'pointer'
    giftshopClose.animate(
        [
            { backgroundImage: 'linear-gradient(black,black,grey)',borderColor: 'gold',color: 'gold'},
            { backgroundImage: 'linear-gradient(grey,white,white)',borderColor: 'black', color: 'black'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'linear'
        }
    )
})
giftshopClose.addEventListener('mouseout',function(){
    giftshopClose.animate(
        [
            { backgroundImage: 'linear-gradient(grey,white,white)',borderColor: 'black', color: 'black'},
            { backgroundImage: 'linear-gradient(black,black,grey)',borderColor: 'gold',color: 'gold'}
        ],
        {
            iterations: '1',
            duration: 250,
            fill: 'forwards',
            easing: 'linear'
        }
    )
});

giftshopClose.onclick = function(){
    giftshopPage.style.display = 'none'
}

//giftshop h1
var giftshop_h1 = document.createElement('div');
giftshopHeader.appendChild(giftshop_h1);
Object.assign(giftshop_h1.style,{
    width: '15%',
    height: '150px',
    //  borderRight: '1px blue solid',
    fontSize: '300%',
    marginTop: '-55px',
    backgroundColor: 'indigo',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    paddingLeft: '7px',
    color: 'white'
})
giftshop_h1.innerHTML = 'giftshop';

var fullGiftshop = document.createElement('div');
giftshopPage.appendChild(fullGiftshop);
Object.assign(fullGiftshop.style,{
    width: '93%',
    height: '690px',
    // border: 'blue 1px solid',
    margin: 'auto',
    overflowY: 'scroll',
    overFlow: 'hidden',
    backgroundImage: 'linear-gradient(black,grey)'

})

/// for loop to create entire giftshop mwahahahahhahahahahhahahahahahhaahhahahahaha//////////////////////////////////////////////////////////////////////////////////////////////

for(var i = 0; i < giftshop.length; i++){



//giftshopcard holder
var giftshopCard = document.createElement('div');///////////////////////////////////////////////////giftshopcard//////////////////////////////////////////////////////////////////////////////////////////
fullGiftshop.appendChild(giftshopCard);
Object.assign(giftshopCard.style,{
    width: '75%',
    height: '300px',
    backgroundColor: 'aliceblue',
    margin: 'auto',
    marginTop: '53px',
    display: 'flex',
    borderRadius: '23px',
    
})

//giftshop card image///////////////////////////////////////////////////////////////////////////card insert food images/////////////////////////////////////////////////////////////////////////////
var giftshopCardImage= document.createElement('div');
giftshopCard.appendChild(giftshopCardImage);
Object.assign(giftshopCardImage.style,{
    width: '40%',
    height: '300px',
    border: '1px solid red',
    backgroundColor: 'grey',
    borderTopLeftRadius: '23px',
     borderBottomLeftRadius: '23px',
     backgroundImage: `url(${giftshop[i].imgUrl})`,
     backgroundSize: '100%',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat'
});

//giftshop stats
var giftshopStats = document.createElement('div')
giftshopCard.appendChild(giftshopStats);
Object.assign(giftshopStats.style,{
    width: '58%',
    height: '280px',
    // border: 'blue 1px solid',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column'
});

//foodItem header////////////////////////////////////////////////////////////card insert food name//////////////////////////////////////////////////////////////////////////////////////////////
var foodItemHeader = document.createElement('div');
giftshopStats.appendChild(foodItemHeader);
Object.assign( foodItemHeader.style,{
    width: '80%',
    heigth: '153px',
    borderBottom: '1px inset black',
    fontSize: '230%'

})
foodItemHeader.innerHTML = giftshop[i].name;

//create div for food item discription
var foodItemDescription = document.createElement('div');
giftshopStats.appendChild(foodItemDescription);
Object.assign(foodItemDescription.style,{
    width: '90%',
    height: '160px',
    borderBottom: '1px solid black',
    fontSize: '150%',
    textAlign: 'justify'

})
foodItemDescription.innerText = giftshop[i].desc;



//create a price display for giftshop card/////////////////////////////////////////////////////////////////////////card food price//////////////////////////////////////////////////////////////
let cardPriceDisplay = document.createElement('div');
giftshopStats.appendChild(cardPriceDisplay);
Object.assign(cardPriceDisplay.style,{
    width: '66%',
    height: '120px',
    fontSize: '450%',
    textAlign: 'right',
    backgroundImage: 'linear-gradient(black,grey)',
    color: 'gold',
    border: '7px gold outset',
    borderRadius: '23px',
    marginLeft: '290px',
    marginTop: '23px'
});
cardPriceDisplay.innerHTML = giftshop[i].price;
}


//menu page////////////////////////////////////////////////////////////////////////////////////////////////////////////////////menupage start/////////////////////////////////////////
//menu items
    var menu=[
        {item: 0, name: 'Dragon fire omelet',imgUrl:`../IMG/Dragons_Fire_Omelet.png`,desc: 'A fiery concoction of eggs whipped with a secret blend of spices, filled with smoked meats and roasted Darkwood peppers. Topped with a drizzle of spicy crimson sauce that’s said to ignite the taste buds with dragon-like fervor.',price: 14.99,quantity: 1},
        {item: 1, name: 'Elven Breadsticks',imgUrl:`../IMG/Elf_Breadsticks.webp`,desc: ' Delicate, golden breadsticks infused with the subtle sweetness of forest honey and baked with a sprinkle of enchanted herbs. Each stick is as light as an elf’s step yet satisfying enough to quiet a rumbling stomach.',price: 8.99, quantity: 1},
        {item: 2, name: 'Paopu Fruit bowl',imgUrl: `../IMG/Fruit_Bowl.webp`,desc: 'A vibrant assortment of seasonal fruits, freshly picked from the mystical orchards of the realm. Expect slices of golden apples, star-shaped berries, and the elusive moonlit melon, served in a carved wooden bowl.',price: 8.99, quantity: 1},
        {item: 2, name: 'Orcish Garlic Bread',imgUrl: '../IMG/Garlic_Bread.webp',desc: 'Thick slices of rustic loaf toasted with a generous spread of butter and minced wild garlic. Sprinkled with crushed dragonroot for an extra kick, these pieces are a perfect balance of crispness and fluffiness.',price: 8.99 ,quantity: 1},
        {item: 3, name: 'Mystic Porridge',imgUrl: `../IMG/Porridge.png`,desc: 'A comforting bowl of warm porridge made with oats soaked in honey-milk, topped with a sprinkle of ground pixie nuts and a swirl of faerie berry compote. Known to fortify adventurers for a day’s journey.',price: 9.99,quantity: 1},
        {item: 4, name: 'Wizard Coffee',imgUrl: '../IMG/wizard_coffee.png',desc: 'A steaming cup of dark, enchanted brew with hints of spiced cinnamon and roasted cocoa beans. It\'s served with a dollop of whipped stardust cream and a tiny shard of crystal sugar that glimmers as it melts.',price: 5.99,quantity: 1},
        {item: 5, name: 'Pancakes', imgUrl:'../IMG/Pancakes.webp',desc: ' A stack of golden pancakes, fluffy as a cloud sprite\'s pillow, drizzled with maple nectar and adorned with a sprinkle of powdered frostberry sugar. Served with a side of spiced butter for that extra magical touch.',price: 9.99,quantity: 1},
        {item: 6, name: 'Dragon breath Soup', imgUrl: `../IMG/Dragon_breath_soup.png`,desc: 'A fiery red broth simmered with roasted Darkwood tomatoes, smoked peppers, and a blend of enchanted spices that warm the soul. Topped with a dollop of cream infused with dragonroot for a smoky finish. It’s said to be a favorite of fire-breathing adventurers.',price: 14.99,quantity: 1},
        {item: 7, name: 'Snake Sandwhich', imgUrl: '../IMG/Snake_sandwich.png', desc: ' A coiled delight featuring thinly sliced, seasoned serpent meat (or vegetarian “snake” strips) layered with crisp forest greens, roasted vine tomatoes, and a tangy basil aioli, it’s a daring choice for bold eaters.',price: 9.99,quantity: 1},
        {item: 8, name: 'Knight\'s Feast', imgUrl: '../IMG/Knights_Feast_Pie.png', desc: 'A hearty pastry filled with seasoned beef, vegetables, and gravy, baked to a golden crust.', price: 14.99,quantity: 1},
        {item: 9, name: 'Phoenix Fire Burger',imgUrl: '../IMG/Phoenix_Fire_Burger.png', desc: 'Spicy grilled chicken burger with pepper jack cheese, chili mayo, and a side of lava fries.',price: 14.99,quantity: 1},
        {item: 10, name: 'Enchanted Forest Pie', imgUrl: '../IMG/enchanted_forrest_pie.png', desc: ' A rustic, hearty pie with a flaky, golden crust filled with a medley of forest-inspired ingredients. Earthy mushrooms, caramelized onions, roasted chestnuts, and fresh herbs are paired with a creamy, savory sauce that brings all the flavors together.', price: 18.99,quantity: 1},
        {item: 11, name: 'Wizard\'s Stew', imgUrl: '../IMG/magic_mushroom_soup.png', desc: 'A bubbling cauldron of comfort! This rich and hearty stew features tender chunks of braised beef or slow-cooked lamb, root vegetables, and a secret blend of spices, all simmered in a savory broth. Topped with a swirl of cream and served with crusty bread.', price: 14.99,quantity: 1},
        {item: 12, name: 'Dragon Scale Chips', imgUrl: '../IMG/Dragon_Scale_Chips.png', desc: 'Thinly crisped Dragon Scales, baked until perfectly crunchy, and lightly seasoned with smoked paprika and sea salt. Served with a vibrant roasted red pepper dip that adds a fiery kick, these scales are from our very own guardian Dragon!',price: 9.99,quantity: 1},
        {item: 13, name: 'Dragon Equivalent', imgUrl: '../IMG/Dragon_Equivalent_Potion.png', desc: ' Ever wondred what it was like to feel like a dragon? Drink this to find out!', price: 19.99,quantity: 1},
        {item: 14, name: 'Dwarve Alchohol', imgUrl: '../IMG/Dwarf_Alchahol.png', desc: 'Practice Alchohol for Dwarves', price: 12.99,quantity: 1},
        {item: 15, name: 'Crystal Chalice', imgUrl: '../IMG/crystal_chalice_special.png', desc: 'Ice cold adult slushie made with crystals concocted by the tastiest of alchemey ingerdients. You will roll a 20 for taste after drinking one of these.', price: 9.99,quantity: 1}
    ]



    var specials = [
        {name: 'The Last Homely Steak Dinner', imgUrl: '../IMG/homely_steak_special.png', desc: 'This steak dinner is for those who need to fill their appeities possibly for the last time due to advuntures. Sering hot steak sizzling with magic is served up with glowing red peppers on top complimented by a freashly picked vegetable medly of green beans, peas, fried potatoes, and corn for good measure. This special also come with a giant enchanted mug of mead that self refills so please drink responsivably', price: 29.99,quantity: 1 }
    ]

//menu page
var menuPage = document.createElement('div');
//placement
bod.appendChild(menuPage);
//id 
menuPage.id = 'menu_page';
//style
Object.assign(menuPage.style,{
    width: '80%',
    height: '900px',
    backgroundColor: 'salmon',
    position: 'absolute',
    top: '15%',
    left: '15%',
    overFlow: 'hidden',
    display: 'none',
    flexDirection: 'column'
});

//menu header to hold header, search, and menu exit
var menuHeader = document.createElement('div');
//placement
menuPage.appendChild(menuHeader);
//style
Object.assign(menuHeader.style,{
    width: '100%',
    height: '200px',
    borderBottom: 'white 5px inset',
    display: 'flex',
    paddingTop: '23px',
});

//menu exit
var menuClose = document.createElement('div');
menuHeader.appendChild(menuClose);
Object.assign(menuClose.style,{
    width: '33px',
    height: '28px',
    border: '2px gold outset',
    borderRadius: '23px',
    color: 'gold',
    backgroundImage: 'linear-gradient(black,black,grey)',
    textAlign: 'center',
    paddingTop: '5px',
    position: 'absolute',
    left: '99%',
    top: '-2%'

});
menuClose.innerHTML = 'X';

//mouseover menu exit
menuClose.addEventListener('mouseover',function(){
    menuClose.style.cursor = 'pointer'
    menuClose.animate(
        [
            { backgroundImage: 'linear-gradient(black,black,grey)',borderColor: 'gold',color: 'gold'},
            { backgroundImage: 'linear-gradient(grey,white,white)',borderColor: 'black', color: 'black'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'linear'
        }
    )
})
menuClose.addEventListener('mouseout',function(){
    menuClose.animate(
        [
            { backgroundImage: 'linear-gradient(grey,white,white)',borderColor: 'black', color: 'black'},
            { backgroundImage: 'linear-gradient(black,black,grey)',borderColor: 'gold',color: 'gold'}
        ],
        {
            iterations: '1',
            duration: 250,
            fill: 'forwards',
            easing: 'linear'
        }
    )
});

menuClose.onclick = function(){
    menuPage.style.display = 'none'
}

//menu h1
var menu_h1 = document.createElement('div');
menuHeader.appendChild(menu_h1);
Object.assign(menu_h1.style,{
    width: '15%',
    height: '150px',
    //  borderRight: '1px blue solid',
    fontSize: '300%',
    marginTop: '-55px',
    backgroundColor: 'salmon',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    paddingLeft: '7px'
})
menu_h1.innerHTML = 'menu';

//search menu
var searchMenu_h1 = document.createElement('div');
menuHeader.appendChild(searchMenu_h1);
Object.assign(searchMenu_h1.style,{
    width: '30%',
    height: '150px',
    // border: 'blue 1px solid',
    fontSize: '300%',
})
searchMenu_h1.innerHTML ='search Menu:';

//search menu input bar and search button holder
var searchMenuInputHolder = document.createElement('div');
searchMenu_h1.appendChild(searchMenuInputHolder);
Object.assign(searchMenuInputHolder.style,{
    width: '100%',
    height: '75px',
    // border: '1px red solid',
    display: 'flex',
    paddingTop: '13px'
})

//search menu input bar
var searchMenuInput = document.createElement('input');
searchMenuInputHolder.appendChild(searchMenuInput);
Object.assign(searchMenuInput.style,{
    width: '70%',
    height: '43px',
    borderRadius: '23px',
    paddingLeft: '13px'
});
searchMenuInput.placeholder = 'search...'

//search button
var menuSearchBtn = document.createElement('div');
searchMenuInputHolder.appendChild(menuSearchBtn);
Object.assign(menuSearchBtn.style,{
    width: '20%',
    height: '43px',
    border: 'black 3px inset',
    borderRadius: '13px',
    backgroundColor: 'aliceblue',
    backgroundImage: 'url(../IMG/search.svg)',
    backgroundPosition: 'center',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat'
})
menuSearchBtn.addEventListener('mouseover',function(){
    menuSearchBtn.style.cursor = 'pointer'
    menuSearchBtn.animate(
        [
            {borderColor: 'black', backgroundSize: '50%'},
            {borderColor: 'gold', backgroundSize: '60%'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'linear'
        }
    )
})
menuSearchBtn.addEventListener('mouseout',function(){
    menuSearchBtn.animate(
        [
            {borderColor: 'gold', backgroundSize: '60%'},
            {borderColor: 'black', backgroundSize: '50%'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'linear'
        }
    )
})

//todays special
var menuSpecial = document.createElement('div');
menuHeader.appendChild(menuSpecial)
Object.assign(menuSpecial.style,{
    width: '30%',
    height: '120px',
    // border: 'red 1px solid',
    fontSize: '300%'

})
menuSpecial.innerHTML = 'Today\'s Special:'

//todays special display
var menuSpecialDisplay = document.createElement('div')
menuSpecial.appendChild(menuSpecialDisplay)
Object.assign(menuSpecialDisplay.style,{
    width: '80%',
    height: '23px',
    margin: 'auto',
    marginTop: '12px',
    borderBottom: 'yellow 1px solid',
    fontSize: '40%',
    textAlign: 'center'
})
menuSpecialDisplay.innerHTML =specials[0].name;

//todays special click for details
var specialsPageOpen = document.createElement('div');////////////////////////////////////////////////////////////////////////////////////to specials page/////////////////////////////////////////
menuSpecial.appendChild(specialsPageOpen);
Object.assign(specialsPageOpen.style,{
    width: '80%',
    height: '23px',
    border:'1px solid white',
    margin: 'auto',
    marginTop: '3px',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '13px',
    fontSize: '30%',
    paddingTop: '3px',
    textAlign: 'center'

});
specialsPageOpen.innerHTML = 'click for details'

specialsPageOpen.addEventListener('mouseover',function(){
    specialsPageOpen.style.cursor = 'pointer'
    specialsPageOpen.animate(
        [
            {color: 'white',backgroundColor: 'black',borderColor: 'white'},
            {color: 'black',backgroundColor: 'white',borderColor: 'gold'}
        ],
        {
            duration: 200,
            iterations: '1',
            easing: 'linear',
            fill: 'forwards'
        }
    )
})

specialsPageOpen.addEventListener('mouseout',function(){
    specialsPageOpen.style.cursor = 'pointer'
    specialsPageOpen.animate(
        [
            {color: 'black',backgroundColor: 'white',borderColor: 'gold'},
            {color: 'white',backgroundColor: 'black',borderColor: 'white'}  
        ],
        {
            duration: 200,
            iterations: '1',
            easing: 'linear',
            fill: 'forwards'
        }
    )
})

//recommended items section on menu
var menuRecommended = document.createElement('div');
menuHeader.appendChild(menuRecommended);
Object.assign(menuRecommended.style,{
    width: '30%',
    height: '120px',
    // border: '1px red solid',
    fontSize: '230%',
    textAlign: 'center'
})
menuRecommended.innerHTML = 'Recommended Items'

//recommended items image holder
var recommendedHolder = document.createElement('div');
menuRecommended.appendChild(recommendedHolder);
Object.assign(recommendedHolder.style,{
    width: '60%',
    height: '46px',
    // border: 'white 1px solid',
    margin: 'auto',
    marginTop: '26px',
    display: 'flex'
});

//recomended items previous orders
var previousItems = document.createElement('div')

//recommended items today's special
var specialItems = document.createElement('div')

//recommended items staff picks
var staffItems = document.createElement('div')

var recommendedArray = [previousItems,specialItems,staffItems];

var recommendedImgArray = ['url(../IMG/cart_white.svg)','url(../IMG/special.svg)','url(../IMG/staff_choice.svg)'];

//loop for append and background img
for(let i = 0; i < recommendedArray.length; i++){
    //append
    recommendedHolder.appendChild(recommendedArray[i]);
    //backgroundImage
    recommendedArray[i].style.backgroundImage = recommendedImgArray[i];

    //feedback via even listeners
    recommendedArray[i].addEventListener('mouseover',function(){
        recommendedDescArray[i].style.display = 'flex';
        recommendedArray[i].style.cursor = 'pointer';
        recommendedArray[i].animate(
            [
                {borderColor: 'white', backgroundColor: 'transparent'},
                {borderColor: 'gold', backgroundColor: 'black'}
            ],
            {
                duration: 200,
                iterations: '1',
                fill: 'forwards',
                easing: 'linear'
            }
        )
    })
    recommendedArray[i].addEventListener('mouseout',function(){
        recommendedDescArray[i].style.display = 'none';
        recommendedArray[i].animate(
            [
                {borderColor: 'gold', backgroundColor: 'black'},
                {borderColor: 'white', backgroundColor: 'transparent'}
            ],
            {
                duration: 200,
                iterations: '1',
                fill: 'forwards',
                easing: 'linear'
            }
        )
    })
}
//for each style
recommendedArray.forEach(recommendedBoi =>{
    Object.assign(recommendedBoi.style,{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        width: '33%',
        height: '33px',
        border: 'white 1px solid',
        borderRadius: '3px'
    })
})

//recommended items on hover desc display
var previousItemsDesc = document.createElement('div')
previousItems.appendChild(previousItemsDesc)

var specialItemsDesc = document.createElement('div')
specialItems.appendChild(specialItemsDesc)

var staffChoiceDesc = document.createElement('div')
staffItems.appendChild(staffChoiceDesc)

//array for recommended desc
var recommendedDescArray = [previousItemsDesc, specialItemsDesc, staffChoiceDesc];
//style forEach recommended itemDesc
recommendedDescArray.forEach(recommendedDescBoi =>{
    Object.assign(recommendedDescBoi.style,{
        width: 'fitcontent',
        height: 'fitcontent',
        backgroundColor: 'aliceblue',
        borderRadius: '8px',
        marginTop: '33px',
        color: 'black',
        fontSize: '30%',
        paddingTop: '9px',
        display: 'none',
        alignText: 'center',
        paddingLeft: '4px'
    })
})
//loop for innerHTML recommendedDesc
var recommendedText = ['Previous Items','Specials','Staff Picks']

for(var i = 0; i < recommendedText.length; i++){
    recommendedDescArray[i].innerHTML = recommendedText[i];
}

//////////////////////////////////////////////////////////////////////////////////////card menu/////////////////////////////////////////////////////////////////////////////////////////////
var fullMenu = document.createElement('div');
menuPage.appendChild(fullMenu);
Object.assign(fullMenu.style,{
    width: '93%',
    height: '690px',
    // border: 'blue 1px solid',
    margin: 'auto',
    overflowY: 'scroll',
    overFlow: 'hidden',
    backgroundImage: 'linear-gradient(black,grey)'

})

/// for loop to create entire menu mwahahahahhahahahahhahahahahahhaahhahahahaha//////////////////////////////////////////////////////////////////////////////////////////////

for(var i = 0; i < menu.length; i++){



//menucard holder
var menuCard = document.createElement('div');///////////////////////////////////////////////////menucard//////////////////////////////////////////////////////////////////////////////////////////
fullMenu.appendChild(menuCard);
Object.assign(menuCard.style,{
    width: '75%',
    height: '300px',
    backgroundColor: 'aliceblue',
    margin: 'auto',
    marginTop: '53px',
    display: 'flex',
    borderRadius: '23px',
    
})

//menu card image///////////////////////////////////////////////////////////////////////////card insert food images/////////////////////////////////////////////////////////////////////////////
var menuCardImage= document.createElement('div');
menuCard.appendChild(menuCardImage);
Object.assign(menuCardImage.style,{
    width: '40%',
    height: '300px',
    border: '1px solid red',
    backgroundColor: 'grey',
    borderTopLeftRadius: '23px',
     borderBottomLeftRadius: '23px',
     backgroundImage: `url(${menu[i].imgUrl})`,
     backgroundSize: '100%',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat'
});

//menu stats
var menuStats = document.createElement('div')
menuCard.appendChild(menuStats);
Object.assign(menuStats.style,{
    width: '58%',
    height: '280px',
    // border: 'blue 1px solid',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column'
});

//foodItem header////////////////////////////////////////////////////////////card insert food name//////////////////////////////////////////////////////////////////////////////////////////////
var foodItemHeader = document.createElement('div');
menuStats.appendChild(foodItemHeader);
Object.assign( foodItemHeader.style,{
    width: '80%',
    heigth: '153px',
    borderBottom: '1px inset black',
    fontSize: '230%'

})
foodItemHeader.innerHTML = menu[i].name;

//create div for food item discription
var foodItemDescription = document.createElement('div');
menuStats.appendChild(foodItemDescription);
Object.assign(foodItemDescription.style,{
    width: '90%',
    height: '160px',
    borderBottom: '1px solid black',
    fontSize: '150%',
    textAlign: 'justify'

})
foodItemDescription.innerText = menu[i].desc;



//create a price display for menu card/////////////////////////////////////////////////////////////////////////card food price//////////////////////////////////////////////////////////////
let cardPriceDisplay = document.createElement('div');
menuStats.appendChild(cardPriceDisplay);
Object.assign(cardPriceDisplay.style,{
    width: '66%',
    height: '120px',
    fontSize: '450%',
    textAlign: 'right',
    backgroundImage: 'linear-gradient(black,grey)',
    color: 'gold',
    border: '7px gold outset',
    borderRadius: '23px',
    marginLeft: '290px',
    marginTop: '23px'
});
cardPriceDisplay.innerHTML = '$'+menu[i].price;

//mouse over mouse off price display
cardPriceDisplay.addEventListener('mouseover',function(){
    cardPriceDisplay.style.cursor = 'pointer';
    cardPriceDisplay.animate(
        [
            { backgroundImage: 'linear-gradient(black,grey)',borderColor:'gold', color: 'gold'},
            { backgroundImage: 'linear-gradient(grey,white)',borderColor: 'black',color: 'black'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'linear'
        }
    )
});
//mouse over mouse off price display
cardPriceDisplay.addEventListener('mouseout',function(){
    cardPriceDisplay.animate(
        [
            { backgroundImage: 'linear-gradient(grey,white)',borderColor: 'black',color: 'black'},
            { backgroundImage: 'linear-gradient(black,grey)',borderColor:'gold', color: 'gold'}
           
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'linear'
        }
    )
});

//add to cart button for menu cards
var addToCart = document.createElement('div');
cardPriceDisplay.appendChild(addToCart);
Object.assign(addToCart.style,{
    width: '73px',
    height: '73px',
    borderRadius: '23px',
    fontSize: '30%',
    textAlign: 'left',
    marginTop: '-90px',
    marginLeft: '7px',
    paddingTop: '13px'
});
addToCart.innerHTML = 'Add to Cart';

 // Assign a data attribute to identify the item
cardPriceDisplay.setAttribute('data-id', i);
 

 //////////////////////////////////////////////////////////////////////////////////////////////////////add to cart///////////////////////////////////////////////////////////////////////////////
     // Add event listener for Add to Cart button
     cardPriceDisplay.addEventListener('click', function (event) {
         let itemId = event.target.getAttribute('data-id');
         let selectedItem = menu[itemId]; // Get the item from the menu array
        
         //add plus 1 item to cart tracker
         addItem();
        addSubTotal(selectedItem.price);
         // Add the selected item to the cart
         cartArray.push(selectedItem);
 
         // Optional: Log or update the cart display
         console.log(`${selectedItem.name} added to the cart.`);
         console.log('Current Cart:', cartArray);
         alert(`${selectedItem.name} added to the cart.`)

         //create inventory 
         //inventory holder
var inventoryHeaders = document.createElement('div');
inventoryHolder.appendChild(inventoryHeaders);
Object.assign(inventoryHeaders.style,{
    width: '96%',
    height: '46px',
    border: '3px black inset',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '23px',
    backgroundImage: 'linear-gradient(white,white,grey)',
    marginTop: '23px'
});

//create headers 
var itemDisplayName = document.createElement('div');
var itemDisplayPrice = document.createElement('div');
var itemDisplayQuantity = document.createElement('div');
var itemRemoveButton = document.createElement('div');

//item headers array 
var itemDisplayArray = [itemDisplayName, itemDisplayPrice, itemDisplayQuantity,itemRemoveButton];
var itemDisplayTextArray = ['item:', 'price:','quantity:','']

//append and style item headers 
for(let i = 0; i < itemDisplayArray.length; i++){
    inventoryHeaders.appendChild(itemDisplayArray[i]);
    itemDisplayArray[i].innerHTML = itemDisplayTextArray[i];
}

itemDisplayArray.forEach(itemDisplayBoi =>{
    Object.assign(itemDisplayBoi.style,{
        width: '25%',
        height: '20px',
        // borderBottom: '1px gold solid',
        paddingLeft: '18px'
    });
});

//create cart item place holder div
var cartItemName = document.createElement('div');
var cartItemPrice = document.createElement('div');
var cartItemQuantity = document.createElement('div');
var cartRemoveItem = document.createElement('div');

//append and style
var cartItemArray = [cartItemName, cartItemPrice, cartItemQuantity, cartRemoveItem];
for(let i = 0; i < cartItemArray.length; i++){
    itemDisplayArray[i].appendChild(cartItemArray[i]);

}

cartItemName.innerHTML = selectedItem.name;
cartItemPrice.innerHTML = selectedItem.price;
cartItemQuantity.innerHTML = selectedItem.quantity;

//orderInventory
var orderInventory = document.createElement('div');
cartCheck.appendChild(orderInventory);
Object.assign(orderInventory.style,{
    width: '96%',
    height: 'fitcontent',
    borderBottom: 'black 1px solid',
    margin:'auto',
    marginTop:'5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly'
});
console.log('order inventory line 2153');

//orderinventory
var orderName = document.createElement('div');
var orderPrice = document.createElement('div');
var orderQuantity = document.createElement('div');

var orderArray = [orderName,orderQuantity,orderPrice];
for(let i = 0; i < orderArray.length; i++){
    orderInventory.appendChild(orderArray[i]);
}
orderArray.forEach(orderBoi =>{
    Object.assign(orderBoi.style,{
        width: '30%',
        height: '23px',
        // border: 'black solid 1px'
    });
});

orderName.innerHTML = selectedItem.name;
orderPrice.innerHTML = '$'+selectedItem.price;
orderQuantity.innerHTML = selectedItem.quantity;

Object.assign(cartRemoveItem.style,{
    width: '263px',
    height: '63px',
    backgroundImage: 'linear-gradient(black,indigo)',
    borderRadius: '33px',
    border: 'white 7px outset',
    marginTop: '-3px',
    fontSize: '260%',
    color: 'white',
    paddingLeft: '13px',
    textAlign: 'center',
    paddingRight: '23px'
});
cartRemoveItem.innerHTML ='Remove';

cartRemoveItem.addEventListener('mouseover', function(){
    cartRemoveItem.style.cursor = 'pointer';
    cartRemoveItem.animate(
        [
            {backgroundImage: 'linear-gradient(black,indigo)',borderColor: 'white',color: 'white'},
            {backgroundImage: 'linear-gradient(indigo,black)',borderColor: 'gold', color: 'gold'}
        ],
        {
            iterations: '1',
            duration: 200,
            easing: 'ease-in',
            fill: 'forwards'
        }
    )
});

cartRemoveItem.addEventListener('mouseout', function(){
  
    cartRemoveItem.animate(
        [
            {backgroundImage: 'linear-gradient(indigo,black)',borderColor: 'gold', color: 'gold'},
            {backgroundImage: 'linear-gradient(black,indigo)',borderColor: 'white',color: 'white'}
        ],
        {
            iterations: '1',
            duration: 200,
            easing: 'ease-in',
            fill: 'forwards'
        }
    )
});
 
     });

}

//checkout page//////////////////////////////////////////////////////////////////////////////////////////////////////////////////checkoutpage/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var checkoutPage = document.createElement('div');
bod.appendChild(checkoutPage); 
Object.assign(checkoutPage.style,{
    position: 'absolute',
    width: '700px',
    height: '800px',
    borderRadius:'23px',
    backgroundImage: 'linear-gradient(black,grey)',
    top: '8%',
    left: '30%',
    display: 'none',
    flexDirection: 'column'
});

//checkout header
var checkoutHeader = document.createElement('div');
checkoutPage.appendChild(checkoutHeader);
Object.assign(checkoutHeader.style,{
    width: '700px',
    height: '120px',
    // border: 'white 1px solid',
    

});

//close checkout page
var closeCheckoutPage = document.createElement('div');
checkoutHeader.appendChild(closeCheckoutPage);
Object.assign(closeCheckoutPage.style,{
    width: '30px',
    height: '30px',
    backgroundImage: 'linear-gradient(grey,white)',
    borderRadius: '23px',
    border: 'white 3px outset',
    cursor: 'pointer',
    marginLeft: '98%',
    textAlign: 'center',
    paddingTop: '3px'

});
closeCheckoutPage.innerHTML = 'X';

closeCheckoutPage.addEventListener('mouseover', function(){
    closeCheckoutPage.animate(
        [
        {backgroundImage: 'linear-gradient(grey,white)',borderColor: 'white',color:'black'},
        {backgroundImage: 'linear-gradient(black,grey)',borderColor: 'gold',color: 'gold'}
    ],
    {
        iterations: '1',
        duration: 200,
        fill: 'forwards',
        easing: 'ease'
    }
)
});
closeCheckoutPage.addEventListener('mouseout', function(){
    closeCheckoutPage.animate(
        [
        {backgroundImage: 'linear-gradient(black,grey)',borderColor: 'gold',color: 'gold'},
        {backgroundImage: 'linear-gradient(grey,white)',borderColor: 'white',color: 'black'}
    ],
    {
        iterations: '1',
        duration: 200,
        fill: 'forwards',
        easing: 'ease'
    }
)
});

closeCheckoutPage.onclick = function(){
    checkoutPage.style.display = 'none'
}

//back to cart button
var backToCart = document.createElement('div');
checkoutHeader.appendChild(backToCart);
Object.assign(backToCart.style,{
    width: '53px',
    height: '73px',
    border: 'white 1px solid',
    marginLeft: '9px',
    borderRadius: '12px',
     cursor: 'pointer',
    backgroundImage: 'linear-gradient(transparent,transparent)'
});

backToCart.addEventListener('mouseover', function(){
    backToCartImage.style.backgroundImage = 'url(../IMG/cart_black.svg)';
    backToCartText.style.color = 'black';
    backToCart.animate(
        [
            { backgroundImage: 'linear-gradient(transparent,transparent)',borderColor: 'white'},
            { backgroundImage: 'linear-gradient(grey,white)',borderColor: 'gold'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'ease-in'
        }
    )
});
backToCart.addEventListener('mouseout', function(){
    backToCartImage.style.backgroundImage = 'url(../IMG/cart_gold.svg)';
    backToCartText.style.color = 'gold';
    backToCart.animate(
        [
            { backgroundImage: 'linear-gradient(grey,white)',borderColor: 'gold'},
            { backgroundImage: 'linear-gradient(transparent,transparent)',borderColor: 'white'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'ease-in'
        }
    )
});

backToCart.onclick = function(){
    checkoutPage.style.display = 'none';
    cartPage.style.display = 'flex';
}

//back to cart image
var backToCartImage = document.createElement('div');
backToCart.appendChild(backToCartImage);
Object.assign(backToCartImage.style,{
    width: '53px',
    height: '53px',
    backgroundImage: 'url(../IMG/cart_gold.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
});

//back to cart "back" text
var backToCartText = document.createElement('div');
backToCart.appendChild(backToCartText);
Object.assign(backToCartText.style,{
    color: 'gold',
    paddingLeft: '9px',
    borderTop: '1px white solid',
   
});
backToCartText.innerHTML = 'Back';

//checkout page h1
var checkoutH1 = document.createElement('div');
checkoutPage.appendChild(checkoutH1);
Object.assign(checkoutH1.style,{
    width: '300px',
    height: '73px',
    // border: '1px red solid',
    margin: 'auto',
    marginTop: '-50px',
    fontSize: '400%',
    color: 'gold'
});
checkoutH1.innerHTML = 'Checkout';

//add a tip section
var addtipSection = document.createElement('div');
checkoutPage.appendChild(addtipSection);
Object.assign(addtipSection.style,{
    width: '530px',
    height: '200px',
    // border: '1px solid white',
    margin: 'auto',
    marginTop: '-120px',
    display: 'flex',
    flexDirection: 'column'
});

var addTipText = document.createElement('div');
addtipSection.appendChild(addTipText);
Object.assign(addTipText.style,{
    width: '93px',
    height: '23px',
    color: 'gold',
    borderBottom: '1px solid white',
    margin: 'auto',
    fontSize: '120%',
    textAlign: 'center',
    marginTop: '73px'
   
});
addTipText.innerHTML = ' Add tip?';

//tip options holder
var tipOptionsHolder = document.createElement('div');
addtipSection.appendChild(tipOptionsHolder);
Object.assign(tipOptionsHolder.style,{
    width: '60%',
    height: '73px',
    display: 'flex',
    margin: 'auto',
    marginBottom: '13px'
  
});

//tip options
var tip_0 = document.createElement('div');
var tip_1 = document.createElement('div');
var tip_2 = document.createElement('div');
var tip_3 = document.createElement('div');

var tipAmounts = ['10%','15%','20%','25%']
//loops and arrays to append and style
var tipArray = [tip_0,tip_1,tip_2,tip_3];
for(let i = 0; i < tipArray.length; i++){
    tipOptionsHolder.appendChild(tipArray[i]);
    tipArray[i].innerHTML = tipAmounts[i];
     
    tipArray[i].addEventListener('click', function(){
        tipArray[i].animate(
            [
                {backgroundColor: '',color: 'white',borderColor: 'white'},
                {backgroundColor: 'black',color: 'gold',borderColor: 'gold'}
            ],
            {
                iterations: '1',
                duration: 200,
                fill: 'forwards',
                easing: 'ease-in'
            }
        )
    });
}
tipArray.forEach(tipBoi =>{
    Object.assign(tipBoi.style,{
        width: '25%',
        height: '53px',
        color: 'white',
        border: '1px white solid',
        textAlign: 'center',
        paddingTop: '23px',
        borderRadius: '12px',
        marginLeft: '8px',
        cursor: 'pointer',
        marginTop:'23px'
       
    });
});
//tip amount display
var tipAmountHolder = document.createElement('div');
addtipSection.appendChild(tipAmountHolder);
Object.assign(tipAmountHolder.style,{
    width: '270px',
    height: '33px',
    // border: '1px blue solid',
    display: 'flex',
    margin: 'auto',
    borderBottom: '1px white solid'
  
   
});

//tip amount text
var tipAmountText = document.createElement('div');
tipAmountHolder.appendChild(tipAmountText);
Object.assign(tipAmountText.style,{
    width: '50%',
    height: '53px',
    color: 'white',
    fontSize: '150%'

});
tipAmountText.innerHTML = 'Tip Amount:';

//tip amount display
var tipAmountDisplay = document.createElement('div');
tipAmountHolder.appendChild(tipAmountDisplay);
Object.assign(tipAmountDisplay.style,{
    color: 'gold',
    fontSize:'150%',
    textAlign: 'right',
    width: '50%',

});
tipAmountDisplay.innerHTML = '$'+'2.99';

//create total amount and payment
//total amount display
var totalAmountHolder = document.createElement('div');
checkoutPage.appendChild(totalAmountHolder);
Object.assign(totalAmountHolder.style,{
    width: '300px',
    height: '33px',
    // border: '1px blue solid',
    display: 'flex',
    margin: 'auto',
    marginTop: '0px',
    borderBottom: 'white 1px solid'
   
});

//tip amount text
var totalAmountText = document.createElement('div');
totalAmountHolder.appendChild(totalAmountText);
Object.assign(totalAmountText.style,{
    width: '50%',
    height: '53px',
    color: 'white',
    fontSize: '150%'

});
totalAmountText.innerHTML = 'Total Amount:';

//tip amount display
var totalAmountDisplay = document.createElement('div');
totalAmountDisplay.id  = 'cart-total_2';
totalAmountHolder.appendChild(totalAmountDisplay);
Object.assign(totalAmountDisplay.style,{
    color: 'gold',
    fontSize:'150%',
    textAlign: 'right',
    width: '50%'
});


//payment type
var paymentTypeSection = document.createElement('div');
checkoutPage.appendChild(paymentTypeSection);
Object.assign(paymentTypeSection.style,{
    width: '80%',
    height: '320px',
    // border: 'solid blue 1px',
    margin: 'auto'
});

//cash or card options
var paymentOptions = document.createElement('div');
paymentTypeSection.appendChild(paymentOptions);
Object.assign(paymentOptions.style,{
    width: '30%',
    height: '50px',
    border: '1px white solid',
    borderRadius: '23px',
    margin: 'auto',
    display: 'flex',
    paddingTop: '9px'

});

//payment options
var payment_0 = document.createElement('div');
var payment_1 = document.createElement('div');

var paymentArray = [payment_0,payment_1];
var paymentTypeArray = ['Cash','Card'];

for(let i = 0; i < paymentArray.length; i++){
    paymentOptions.appendChild(paymentArray[i]);
    paymentArray[i].innerHTML = paymentTypeArray[i];

    //mouse over bs 
    paymentArray[i].addEventListener('mouseover',function(){
        paymentArray[i].style.color = 'gold';
    });
    paymentArray[i].addEventListener('mouseout',function(){
        paymentArray[i].style.color = 'white';
    });
};

paymentArray.forEach(paymentBoi =>{
    Object.assign(paymentBoi.style,{
        width: '50%',
        height: '33px',
        textAlign: 'center',
        color: 'white',
        fontSize: '120%',
        paddingTop: '5px'
    });
});

payment_0.style.borderRight = '1px white solid';
payment_1.style.borderLeft = '1px white solid';

//cash on click option
var orderDone = document.createElement('div');
paymentTypeSection.appendChild(orderDone);
Object.assign(orderDone.style,{
    width: '100%',
    height: '230px',
    // border: '1px white solid',
    margin: 'auto',
    marginTop: '12px'
});

//does everything look correct?
var orderCheck = document.createElement('div');
orderDone.appendChild(orderCheck);
Object.assign(orderCheck.style,{
    width: '96%',
    height: '23px',
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    // borderBottom: '1px white solid'

});
orderCheck.innerHTML = 'Does everything look correct?';

//last order confirmation
var cartCheck = document.createElement('div');
orderDone.appendChild(cartCheck);
Object.assign(cartCheck.style,{
    width: '100%',
    height: '200px',
    overflowY: 'scroll',
    backgroundImage: 'linear-gradient(white,grey)',
    margin: 'auto'
    
});


//submit order
var submitOrder = document.createElement('div');
paymentTypeSection.appendChild(submitOrder);
Object.assign(submitOrder.style,{
    width: '30%',
    height: '33px',
    border: '5px outset black',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    borderRadius: '12px',
    margin: 'auto',
    paddingTop: '5px',
    cursor:'pointer'
});
submitOrder.innerHTML = 'Submit Order';

submitOrder.addEventListener('mouseover',function(){
    Object.assign(submitOrder.style,{
        color: 'gold',
        borderColor:'gold',
        backgroundColor: 'black'
    });
});

submitOrder.addEventListener('mouseout',function(){
    Object.assign(submitOrder.style,{
        color: 'black',
        borderColor:'black',
        backgroundColor: 'white'
    });
});

submitOrder.onclick= function(){
    checkoutPage.style.display = 'none';
    readyPage.style.display = 'flex';
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////order ready for pick up//////////////////////////////////////////
var readyPage = document.createElement('div');
bod.appendChild(readyPage);
Object.assign(readyPage.style,{
    width: '500px',
    height: '500px',
    backgroundImage: 'linear-gradient(salmon,grey)',
    position: 'absolute',
    top: '20%',
    left: '35%',
    borderRadius: '13px', flexDirection: 'column',
    display: 'none'
});

//close page thingy 
var closeReadyPage = document.createElement('div');
readyPage.appendChild(closeReadyPage);
Object.assign(closeReadyPage.style,{
    width: '23px',
    height: '23px',
    borderRadius: '23px',
    border: '3px black solid',
    backgroundImage: 'linear-gradient(black,grey)',
    marginLeft: '97%',
    textAlign: 'center',
    color: 'white',
    marginTop: '-8px',
    cursor: 'pointer'
});
closeReadyPage.innerHTML = 'X';
closeReadyPage.addEventListener('mouseover', function(){
    Object.assign(closeReadyPage.style,{
        color: 'gold',
        borderColor: 'gold'
    });
});
closeReadyPage.addEventListener('mouseout', function(){
    Object.assign(closeReadyPage.style,{
        color: 'white',
        borderColor: 'black'
    });
});
closeReadyPage.onclick = function(){
    readyPage.style.display = 'none';
}

//thank you for your buisness, now scram
var thankYou = document.createElement('div');
readyPage.appendChild(thankYou);
thankYou.innerHTML = 'Thank you for your Business!';
Object.assign(thankYou.style,{
    color: 'white',
    fontSize: '600%',
    textAlign: 'center',
    paddingTop: '53px',
   
});

var nowScram = document.createElement('div');
readyPage.appendChild(nowScram);
Object.assign(nowScram.style,{
    width: '10%',
    heigth: '12px',
    fontSize: '11px',
    margin: 'auto',
    color: 'grey',
    cursor: 'pointer'
});
nowScram.innerHTML = 'now go away!'

nowScram.addEventListener('mouseover', function(){
    nowScram.style.color = 'white';
}); 
nowScram.addEventListener('mouseout', function(){
    nowScram.style.color = 'grey';
}); 

//user profile page//////////////////////////////////////////////////////////////////////////////////////////profilePage start///////////////////////////////////////////////////////////////
var profilePage = document.createElement('div');
//placement
bod.appendChild(profilePage);
//id
profilePage.id = 'profile_page';
//style
Object.assign(profilePage.style,{
    width: '700px',
    height: '500px',
    position: 'absolute',
    top: '5%',
    left: '30%',
    backgroundImage: 'linear-gradient(salmon,salmon,black)',
    border: 'white 9px outset',
    borderRadius: '23px',
    display: 'none',
    flexDirection: 'column'
});

//profilepage exit
var profilePageClose = document.createElement('div');
//placement
profilePage.appendChild(profilePageClose);
//style
Object.assign(profilePageClose.style,{
    width: '23px',
    height: '23px',
    marginLeft: '96%'

});
profilePageClose.innerHTML = 'X';

//profilepage mouseover mouse out
profilePageClose.addEventListener('mouseover',function(){
    profilePageClose.style.cursor = 'pointer';
});

//profilePageClose onclick
profilePageClose.onclick= function(){
    profilePage.style.display = 'none';
}

//profile page header
var profileHeader = document.createElement('div');
//placement
profilePage.appendChild(profileHeader);
//id
profileHeader.id = 'profile_header'
//style
Object.assign(profileHeader.style,{
    width: '86%',
    height: '45%',
    borderRadius: '23px',
    margin: 'auto',
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white'
});

//profile pic
var profilePicture = document.createElement('div');
//placement
profileHeader.appendChild(profilePicture);
//id
profilePicture.id = 'profile_picture';
//style
Object.assign(profilePicture.style,{
    width: '35%',
    height: '90%',
    backgroundColor: 'black',
    borderRadius: '120px',
    marginTop: '12px',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
});

//profile page stat holder
var profileStats = document.createElement('div');
//placement
profileHeader.appendChild(profileStats);
//id
profileStats.id = 'profile_stats';
//style
Object.assign(profileStats.style,{
    width: '60%',
    height: '90%',
});

//profile page header showing username
var userNameProfileHeader = document.createElement('div');
//placement
profileStats.appendChild(userNameProfileHeader);
//id
userNameProfileHeader.id = 'user_name_profile_header';
//style
Object.assign(userNameProfileHeader.style,{
    width: '60%',
    height: '25%',
    borderBottom: '1px black solid',
  
});
//profile inner html user name
userNameProfileHeader.innerHTML= 'userNAME:';

//userName display
var userNameDisplay = document.createElement('div');
//placement
userNameProfileHeader.appendChild(userNameDisplay);
//style
Object.assign(userNameDisplay.style,{
 width: '97%',
 height: '24px',
 borderBottom: 'orange 3px groove',
 marginLeft: '32px',
 fontSize: '145%',
 textAlign: 'right',
 margin: 'auto'
});


// guild points from localStorage or default to 0
let guildPoints = parseInt(localStorage.getItem('guildPoints')) || 0;

var guildPointHolder = document.createElement('div');
//placement
profileStats.appendChild(guildPointHolder);
//style
Object.assign(guildPointHolder.style,{
    width: '77%',
    height: '54px',
    borderBottom: 'black 1px groove',

   
   
});
// Add a label to the guild points holder
guildPointHolder.innerHTML = 'guildPOINTS:';

//guildPoint display
var guildPointsDisplay=document.createElement('div');
//placement
guildPointHolder.appendChild(guildPointsDisplay);
//style
Object.assign(guildPointsDisplay.style,{
    width: '97%',
    height: '24px',
    borderBottom: 'orange 3px groove',
    marginLeft: '32px',
    fontSize: '145%',
    textAlign: 'right',
    margin: 'auto'
});

// Update the display dynamically and save to localStorage
function updateGuildPoints(points) {
    guildPoints = points; // Update the value
    localStorage.setItem('guildPoints', guildPoints); // Save to localStorage
    guildPointsDisplay.innerHTML = guildPoints.toLocaleString(); // Format the number with commas
    cartGuildPointsDisplay.innerHTML = guildPoints.toLocaleString(); // Format the number with commas
}

// Initialize the display with the saved guild points
updateGuildPoints(guildPoints);

//ordered items
var orderedItem = document.createElement('div');
//placement
profileStats.appendChild(orderedItem);
Object.assign(orderedItem.style,{
    width: '77%',
    height: '54px',
    borderBottom: 'black 1px groove',
    paddingLeft: '7px'
});
//ordered items innerHTML
orderedItem.innerHTML = 'menuITEMS:'

//ordered itemsDisplay
var orderedItemsDisplay=document.createElement('div');
//placement
orderedItem.appendChild(orderedItemsDisplay);
//style
Object.assign(orderedItemsDisplay.style,{
    width: '97%',
    height: '24px',
    borderBottom: 'orange 3px groove',
    marginLeft: '32px',
    fontSize: '145%',
    textAlign: 'right',
    margin: 'auto'
});

// guild points from localStorage or default to 0
let orderedItems = parseInt(localStorage.getItem('orderedItems')) || 0;

// Update the display dynamically and save to localStorage
function updateOrderedItems(items) {
    orderedItems = items; // Update the value
    localStorage.setItem('orderedItems', orderedItems); // Save to localStorage
    orderedItemsDisplay.innerHTML = orderedItems.toLocaleString(); // Format the number with commas
}

const giftShopItem = document.createElement('div');

// Place it in the profileStats section
profileStats.appendChild(giftShopItem);

// Style the gift shop items holder
Object.assign(giftShopItem.style, {
    width: '77%',
    height: '54px',
    borderBottom: '1px groove black',
    paddingLeft: '7px',
});

// innertext
giftShopItem.innerHTML = 'giftshop ITEMS:';

// giftshop display count
const giftShopItemDisplay = document.createElement('div');

// Place it inside the gift shop items holder
giftShopItem.appendChild(giftShopItemDisplay);

// Style the display element
Object.assign(giftShopItemDisplay.style, {
    width: '97%',
    height: '24px',
    borderBottom: '3px groove orange',
    fontSize: '145%',
    textAlign: 'right',
    margin: 'auto',
});

// Initialize gift shop items from localStorage or default to 0
let giftShopItems = parseInt(localStorage.getItem('giftShopItems')) || 0;

// Function to update the display and save to localStorage
function updateGiftShopItems(gifts) {
    giftShopItems = gifts; // Update the value
    localStorage.setItem('giftShopItems', giftShopItems); // Save to localStorage
    giftShopItemDisplay.innerHTML = giftShopItems.toLocaleString(); // Format the number with commas
}

// Start the display with the initialized giftShopItems value
updateGiftShopItems(giftShopItems);

//start display with orderedItems
updateOrderedItems(orderedItems);

// start display with the saved guild points
updateGuildPoints(guildPoints);

// Example: Add an item dynamically (you can replace this logic)
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'a') {
//         updateOrderedItems(orderedItems + 1);
//     }
// });

//activity cards////////////////////////////////////////////////////////////////////////////////////////////////activity cards start///////////////////////////////////////////////////////////
//create recent activity array
var recentActiviy = [
    {name: 'signed up', imgUrl: '../IMG/nav_img_0.svg', points: '100pts'},
    {name: 'avatar select', imgUrl: '../IMG/nav_img_User.svg', points: '100pts'},
    

];

var activityBoard = document.createElement('div');
//placement
profilePage.appendChild(activityBoard);
//id
activityBoard.id = 'activity_board';
//style
Object.assign(activityBoard.style,{
    width: '80%',
    height: '45%',
    // border: '1px red solid',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Adds spacing between the cards
    alignItems: 'center', // Aligns items vertically in the center of the container
  
});


// Loop through the activities and create cards
recentActiviy.forEach((activity) => {
    createActivityCard(activity.name, activity.imgUrl, activity.points);
});

//function to create activity cards
function createActivityCard(name,imgUrl,points){

//create recent activity cards
var activityCard = document.createElement('div');
//placement
activityBoard.appendChild(activityCard);
//style
Object.assign(activityCard.style,{
    width: '83px',
    height: '140px',
    backgroundImage: 'linear-gradient(violet,indigo)',
    borderRadius: '13px',
    color: 'white',

});

//card header
var cardHeader = document.createElement('div');
//placement
activityCard.appendChild(cardHeader);
//innerHTML
cardHeader.innerHTML = name;
//style
Object.assign(cardHeader.style,{
    marginTop: '9px',
    textAlign: 'center'
});

//activity card image
var cardImage = document.createElement('div');
//placement
activityCard.appendChild(cardImage);
//style
Object.assign(cardImage.style,{
    width: '100%',
    height: '45%',
    backgroundColor: 'white',
    marginTop: '7px',
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
});

//guild points card display
var cardPoints = document.createElement('div');
//placement
activityCard.appendChild(cardPoints);
//style
Object.assign(cardPoints.style,{
    width: '96%',
    height: '23px',
    color: 'goldenrod',
    fontSize: '180%'
});
cardPoints.innerHTML = points;
}

///////////////////////////////////////////////////////////////////////////////////////////////activity cards end///////////////////////////////////////////////
//nav userName onclick 
nav_userName.onclick= function(){
    profilePage.style.display = 'flex';
}

// Function to reset ordered items
function resetOrderedItems() {
    updateOrderedItems(0); // Set the count to zero and update the display
}

// Add an event listener for the 'r' key
document.addEventListener('keydown', (event) => {
    if (event.key === 'r') { // Check if the 'r' key is pressed
        resetOrderedItems(); // Call the reset function
    }
});


//style
navArray.forEach(navArrayBoi =>{
Object.assign(navArrayBoi.style,{
    width: '10%',
    height: '120px',
    // border: '1px red solid',
    margin: 'auto',
    marginTop: '0',
    marginTop: '40px',
    borderRadius: '23px',
    flexDirection: 'column'
   
});
});

//profile picture
var profile = document.createElement('div');
//placement
nav_userName.appendChild(profile);
//style
Object.assign(profile.style,{
    width: '100%',
    height: '45%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: 'url(../IMG/nav_img_User.svg)',
    display: 'none'
  
});

//create img for nav 
var navImg0 = document.createElement('div');
//placement
nav_0.appendChild(navImg0);

var navImg1 = document.createElement('div');
//placement
nav_1.appendChild(navImg1);

var navImg2 = document.createElement('div');
//placement
nav_2.appendChild(navImg2);

var navImg3 = document.createElement('div');
//placement
nav_3.appendChild(navImg3);

var navImg4 = document.createElement('div');
//placement
nav_4.appendChild(navImg4);

var navImg5 = document.createElement('div');
//placement
nav_5.appendChild(navImg5);

var navImg6 = document.createElement('div');
//placement
nav_6.appendChild(navImg6);

var navImg7 = document.createElement('div');
//placement
nav_7.appendChild(navImg7);

var navImg8 = document.createElement('div');
//placement
nav_8.appendChild(navImg8);

//create navimg array
var navImgArray = [navImg0,navImg1,navImg2,navImg3,navImg4,navImg5,navImg6,navImg7,navImg8];
//style
navImgArray.forEach(navImgBoi =>{
Object.assign(navImgBoi.style,{
    width: '100%',
    height: '45%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  
});
});

//make loop for nav img background image

//for loop to distribute images
for(let i = 0; i < navBackground.length; i++){
    navImgArray[i].style.backgroundImage = navBackground[i];
}

//user name text
var userNameText = document.createElement('div');
//placement
nav_userName.appendChild(userNameText);
//style
Object.assign(userNameText.style,{
    fontFamily: 'ff_font',
    width: '100%',
    height: '45%',
    // border: 'green 1px solid',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '160%',
    display: 'none',
     flexDirection: 'column'

});

//text for nav options
var navText_0 = document.createElement('div');
//placement
nav_0.appendChild(navText_0);

var navText_1 = document.createElement('div');
//placement
nav_1.appendChild(navText_1);

var navText_2 = document.createElement('div');
//placement
nav_2.appendChild(navText_2);

var navText_3 = document.createElement('div');
//placement
nav_3.appendChild(navText_3);

var navText_4 = document.createElement('div');
//placement
nav_4.appendChild(navText_4);

var navText_5 = document.createElement('div');
//placement
nav_5.appendChild(navText_5);

var navText_6 = document.createElement('div');
//placement
nav_6.appendChild(navText_6);

var navText_7 = document.createElement('div');
//placement
nav_7.appendChild(navText_7);

var navText_8 = document.createElement('div');
//placement
nav_8.appendChild(navText_8);

//create array for nav text
var navTextArray = [navText_0,navText_1,navText_2,navText_3,navText_4,navText_5,navText_6,navText_7,navText_8];

//style
navTextArray.forEach(navTextBoi =>{
   className = 'navText';
Object.assign(navTextBoi.style,{
    fontFamily: 'ff_font',
    width: '100%',
    height: '45%',
    // border: 'green 1px solid',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '160%',

});

});

//create loop to insert innerText from array
for(let i = 0; i < navTextInner.length; i++){
    navTextArray[i].innerHTML = navTextInner[i];
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create login page
var loginPage = document.createElement('div');
//placement
bod.appendChild(loginPage);
//style
Object.assign(loginPage.style,{
    width: '400px',
    height: '250px',
    backgroundColor: 'rgb(250, 219, 209)',
    position: 'absolute',
    top: '35%',
    left: '35%',
    borderRadius: '13px',
    flexDirection: 'column',
    display: 'none'
});
//close login page
var closeLogin = document.createElement('div');
//placement
loginPage.appendChild(closeLogin);
//style
Object.assign(closeLogin.style,{
    width: '23px',
    height: '23px',
    position: 'absolute',
    left: '93%',
    paddingTop: '3px',
    fontSize: '100%'

});
closeLogin.innerHTML = 'X';
//eventlistener mouseover mouseout
closeLogin.addEventListener('mouseover',function(){
    closeLogin.style.cursor = 'pointer';
    closeLogin.animate(
        [
            {fontSize: '100%'},
            {fontSize: '102%'},
            {fontSize: '103%'},
        ],
        {
            easing: 'ease-in-out',
            duration: 300,
            iteration: '1',
            fill: 'forwards'
        }
    );
});
closeLogin.addEventListener('mouseout',function(){
    closeLogin.animate(
        [
            {fontSize: '103%'},
            {fontSize: '102%'},
            {fontSize: '100%'},
        ],
        {
            easing: 'ease-in-out',
            duration: 300,
            iteration: '1',
            fill: 'forwards'
        }
    );
});

//login username
var userNameLoginHeader = document.createElement('h1');
//placement
loginPage.appendChild(userNameLoginHeader);
//style
Object.assign(userNameLoginHeader.style,{
    width: '60%',
    height: '40px',
    // border: '1px black solid',
    margin: 'auto',
    marginTop: '13px',
    textAlign: 'center'
});
//innerHTML
userNameLoginHeader.innerHTML = 'User Name';

//username input
var userNameInput = document.createElement('input');
//id
userNameInput.id = 'loginUserName';
//type
userNameInput.type = 'text'
//placement
loginPage.appendChild(userNameInput);
//style
Object.assign(userNameInput.style,{
 marginLeft: '10px',
 marginTop: '13px',
 borderRadius: '13px',
 paddingLeft: '13px'
});

//login username
var userNameLoginHeader = document.createElement('h1');
//placement
loginPage.appendChild(userNameLoginHeader);
//style
Object.assign(userNameLoginHeader.style,{
    width: '60%',
    height: '40px',
    // border: '1px black solid',
    margin: 'auto',
    marginTop: '13px',
    textAlign: 'center',

});
//innerHTML
userNameLoginHeader.innerHTML = 'Password';

//username input
var passwordInput = document.createElement('input');
//id
passwordInput.id = 'loginPassword';
//type
passwordInput.type = 'password'
//placement
loginPage.appendChild(passwordInput);
//style
Object.assign(passwordInput.style,{
 marginLeft: '10px',
 marginTop: '13px',
 borderRadius: '13px',
 paddingLeft: '13px'
});

//login submit button
var loginBtn = document.createElement('div');
//placement
loginPage.appendChild(loginBtn);
//style
Object.assign(loginBtn.style,{
    width: '30%',
    height: '50px',
    border: '3px outset white',
    borderRadius: '13px',
    margin: 'auto',
    marginTop: '7px',
    backgroundImage: 'linear-gradient(black,black,black)',
    color: 'white',
    fontSize: '180%',
    textAlign: 'center',
    paddingTop: '13px'
});
//eventlistener
loginBtn.addEventListener('mouseover',function(){
    loginBtn.style.cursor = 'pointer';
    loginBtn.animate(
        [
            { backgroundImage: 'linear-gradient(black,black,black)',color:'white'},
            { backgroundImage: 'linear-gradient(white,black,black)',color:'white'},
            { backgroundImage: 'linear-gradient(white,white,black)',color:'black'},
            { backgroundImage: 'linear-gradient(white,white,white)',color:'black'}
        ],
        {
            iterations: '1',
            duration: 400,
            easing: 'ease-in',
            fill: 'forwards'
        }
    );
});

loginBtn.addEventListener('mouseout',function(){
    loginBtn.animate(
        [
            { backgroundImage: 'linear-gradient(white,white,white)',color:'black'},
            { backgroundImage: 'linear-gradient(white,white,black)',color:'black'},
            { backgroundImage: 'linear-gradient(white,black,black)',color:'white'},
            { backgroundImage: 'linear-gradient(black,black,black)',color:'white'},
          
        ],
        {
            iterations: '1',
            duration: 400,
            easing: 'ease-in',
            fill: 'forwards'
        }
    );
});
//innerHTML
loginBtn.innerHTML = 'LOGIN'

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create section to pick out user avatar
var avatarPage = document.createElement('div');
//placement
bod.appendChild(avatarPage);
//style
Object.assign(avatarPage.style,{
    width: '700px',
    heigth: '900px',
    backgroundColor: 'rgb(250, 219, 209)',
    position: 'absolute',
    top: '9%',//to center
    left: '30%',//to center
    flexDirection: 'column',
    display: 'none'
});

//create successful sign up message box
var signUpMessageBox = document.createElement('div');
//placement
avatarPage.appendChild(signUpMessageBox);
//style
Object.assign(signUpMessageBox.style,{
    width: '90%',
    height: '260px',
    textAlign:'center',
    // border: 'black 1px solid',
    margin: 'auto'

});

//sign up message h2
var signUpMessageh2 = document.createElement('h2');
//placement
signUpMessageBox.appendChild(signUpMessageh2);
//innerHTML 
signUpMessageh2.innerHTML = 'Signup Success!'

//sign up message discription
var signUpMessageDesc = document.createElement('div');
//placement
signUpMessageBox.appendChild(signUpMessageDesc);
//style
Object.assign(signUpMessageDesc.style,{
    width: '90%',
    height: '150px',
    // border: '1px red solid',
    margin: 'auto',
    fontSize: '120%'
});
//innerHTML
signUpMessageDesc.innerHTML = 'Thank you for joining the Restaurant Guild! Now that you are a member you can gain <strong>Guild Points</strong> by exploring the site and also ordering food.';

//guid point image
var guildPointsImg = document.createElement('div');
//placement
signUpMessageDesc.appendChild(guildPointsImg);
//style
Object.assign(guildPointsImg.style,{
    width: '100px',
    height: '100px',
    backgroundImage: 'url(../IMG/guild_points_img.svg)',
    margin: 'auto'
});

//select avatar h1
var select_h1 = document.createElement('h1');
//placement
avatarPage.appendChild(select_h1);
//style
Object.assign(select_h1.style,{
    textAlign: 'center'
});
//innerHTML
select_h1.innerHTML = 'Select a Profile Avatar';

//avatar face holder
var avatarHolder = document.createElement('div');
//placement
avatarPage.appendChild(avatarHolder);
//style
Object.assign(avatarHolder.style,{
    width: '90%',
    height: '600px',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap'
});

//avatar
var avatar_0 = document.createElement('div');
var avatar_1 = document.createElement('div');
var avatar_2 = document.createElement('div');
var avatar_3 = document.createElement('div');
var avatar_4 = document.createElement('div');
var avatar_5 = document.createElement('div');
var avatar_6 = document.createElement('div');
var avatar_7 = document.createElement('div');
var avatar_8 = document.createElement('div');
//avatar array 
var avatarArray = [avatar_0,avatar_1,avatar_2,avatar_3,avatar_4,avatar_5,avatar_6,avatar_7,avatar_8];

var avatar_choosen = false;
var avatarPic = '';

var avatarImgArray = ['url(../IMG/restaurant_guild_log.webp)','url(../IMG/avatar_1.png)','url(../IMG/avatar_2.png)','url(../IMG/avatar_3.png)','url(../IMG/avatar_4.png)','url(../IMG/avatar_5.png)','url(../IMG/avatar_6.png)','url(../IMG/avatar_7.png)','url(../IMG/avatar_8.png)']
//append style background image for avatar
for(let i = 0; i < avatarArray.length; i++){
    //placement
    avatarHolder.appendChild(avatarArray[i]);
    //background img
    avatarArray[i].style.backgroundImage = avatarImgArray[i];

    //mouseover mouseout
    avatarArray[i].addEventListener('mouseover',function(){
        avatarArray[i].style.cursor = 'pointer';
        avatarArray[i].animate(
            [
                {backgroundSize: '102%',backgroundColor:'black',borderColor:'white' },
                {backgroundSize: '110%',backgroundColor:'white',borderColor:'gold'}
            ],
            {
                duration: 200,
                iterations: '1',
                fill: "forwards",
                easing: 'linear'
            }
        );

        
    });

    avatarArray[i].addEventListener('mouseout',function(){
        avatarArray[i].animate(
            [
                {backgroundSize: '110%',backgroundColor:'white',borderColor:'gold' },
                {backgroundSize: '102%',backgroundColor: 'black',borderColor:'white'}
            ],
            {
                duration: 180,
                iterations: '1',
                fill: "forwards",
                easing: 'linear'
            }
        );

        
    });


    avatarArray[i].onclick = function setAvatar() {
        avatarPic = avatarImgArray[i]; // Global variable
        localStorage.setItem('selectedAvatar', avatarPic); // Save in localStorage
        logo.style.backgroundImage = avatarPic;
        profilePicture.style.backgroundImage = avatarPic;
        avatar_choosen = true;
    };
    
    // Retrieve avatar on page load
    window.onload = function() {
        var savedAvatar = localStorage.getItem('selectedAvatar');
        if (savedAvatar) {
            avatarPic = savedAvatar; // Update global variable
            logo.style.backgroundImage = avatarPic;
            profilePicture.style.backgroundImage = avatarPic;
        }
    };
    

}
avatarArray.forEach(avatarBoi =>{
    Object.assign(avatarBoi.style,{
        width: '30%',
        height: '193px',
        border: '3px white outset',
        margin: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '102%',
        backgroundColor: 'black'
    });
  
   
});

//close window
var closeAvatarPage = document.createElement('div');
//placement
avatarPage.appendChild(closeAvatarPage);
//style 
Object.assign(closeAvatarPage.style,{
    width: '75%',
    height: '110px',
    border: '1px solid black',
    margin: 'auto',
    backgroundImage: 'linear-gradient(blue,blue,blue,black)',
    textAlign: 'center',
    color: 'white',
    fontSize: '420%',
    paddingTop: '34px',
    marginBottom: '13px'
});
//innertext
closeAvatarPage.innerHTML = 'CLOSE PAGE';

//mouseover mouse out
closeAvatarPage.addEventListener('mouseover',function(){
    closeAvatarPage.style.cursor = 'pointer;'
    closeAvatarPage.animate(
        [
            {backgroundImage: 'linear-gradient(blue,blue,blue,black)'},
            {backgroundImage: 'linear-gradient(blue,blue,black,black)'},
            {backgroundImage: 'linear-gradient(blue,black,black,black)'},
            {backgroundImage: 'linear-gradient(black,black,black,black)'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'ease'
        }
    )
});
//mouseover mouse out
closeAvatarPage.addEventListener('mouseout',function(){
    closeAvatarPage.animate(
        [
            {backgroundImage: 'linear-gradient(black,black,black,black)'},
            {backgroundImage: 'linear-gradient(blue,blue,black,black)'},
            {backgroundImage: 'linear-gradient(blue,blue,black,black)'},
            {backgroundImage: 'linear-gradient(blue,blue,blue,black)'}
        ],
        {
            iterations: '1',
            duration: 200,
            fill: 'forwards',
            easing: 'ease'
        }
    )
});

//onclick close avatar page
closeAvatarPage.onclick = function (){

    if( avatar_choosen == false){
        alert('Please choose a profile avatar');
    }else if(avatar_choosen == true){
        avatarPage.animate(
            [
                {height: '900px',display: 'flex',opacity: '1'},
                {height: '0px',display: 'none',opacity: '0'}
            ],
            {
                easing: 'ease-in',
                duration: 500,
                iterations: '1',
                fill: 'forwards'
            }
        )
    }
    updateGuildPoints(guildPoints+100);
    alert('avatar select!\nYou gained 100 guild points!');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create logout prompt
var logOutMessage = document.createElement('div');
//placement
bod.appendChild(logOutMessage);
//style
Object.assign(logOutMessage.style,{
    width: '400px',
    height: '200px',
    backgroundColor: 'rgb(250, 219, 209)',
    position: 'absolute',
    top: '30%',
    left: '35%',
    borderRadius: '23px',
    flexDirection: 'column',
    display: 'none'
});

//logout message header
var logOutMessageHeader = document.createElement('h1');
//placement
logOutMessage.appendChild(logOutMessageHeader);
//style
Object.assign(logOutMessage.style,{
    textAlign: 'center',
    paddingTop: '43px',
    fontSize: '300%'
});
//innerHTML
logOutMessage.innerHTML = 'Logout?'

//logOut button holder
var logOutButtonHolder = document.createElement('div');
//placement
logOutMessage.appendChild(logOutButtonHolder);
//style
Object.assign(logOutButtonHolder.style,{
    width: '60%',
    height: '53px',
    border: '3px inset white',
    margin: 'auto',
    borderRadius: '13px',
    marginTop: '12px',
    backgroundColor: ' black',
    display: 'flex'
});

//logOut button yes
var yesLogOut = document.createElement('div');
//placement
logOutButtonHolder.appendChild(yesLogOut);
//style
Object.assign(yesLogOut.style,{
    width: '50%',
    height: '53px',
    borderRight: '1px white solid',
    color: 'white',
    backgroundImage: 'linear-gradient(black,black,black,black)'
});
//innerHTML 
yesLogOut.innerHTML = 'YES';

//logOUT button no
var noLogOut = document.createElement('div');
//placement
logOutButtonHolder.appendChild(noLogOut);
//style
Object.assign(noLogOut.style,{
    width: '50%',
    height: '53px',
    borderLeft: '1px white solid',
    color: 'white',
     backgroundImage: 'linear-gradient(black,black,black,black)'
});
//innerHTML
noLogOut.innerHTML = 'NO';

//logout buttons eventlisteners
//create array for buttons
var logOutBtnArray = [yesLogOut,noLogOut];

for(let i = 0; i < logOutBtnArray.length; i++){
    logOutBtnArray[i].addEventListener('mouseover',function(){
        logOutBtnArray[i].style.cursor = 'pointer';
        logOutBtnArray[i].animate(
            [
                { backgroundImage: 'linear-gradient(black,black,black,black)',color:'white'},
                { backgroundImage: 'linear-gradient(white,white,black,black)',color:'white'},
                {backgroundImage: 'linear-gradient(white,white,white,black)',color:'black'},
                {backgroundImage: 'linear-gradient(white,white,white,white)',color:'black'}
            ],
            {
                iterations: '1',
                duration: 300,
                fill: 'forwards',
                easing: 'ease-in'
            }
        );
    });

    logOutBtnArray[i].addEventListener('mouseout',function(){
        logOutBtnArray[i].animate(
            [
                {backgroundImage: 'linear-gradient(white,white,white,white)',color:'black'},
                {backgroundImage: 'linear-gradient(white,white,white,black)',color:'black'},
                { backgroundImage: 'linear-gradient(white,white,black,black)',color:'white'},
                { backgroundImage: 'linear-gradient(black,black,black,black)',color:'white'}  
            ],
            {
                iterations: '1',
                duration: 300,
                fill: 'forwards',
                easing: 'ease-in'
            }
        );
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//create div for sign up form
const signUpForm = document.createElement('div');
   //placement
   bod.appendChild(signUpForm);
     //style
Object.assign(signUpForm.style,{
    width: '800px',
    height: '3200',
  //   border:  'black 1px solid',
    position: 'absolute',
    top: '5%',//to center
    left: '25%',//to center
    flexDirection: 'column',
    borderRadius: '23px',
    display: 'none',
    opacity: 0,
});

nav_0.onclick = function displaySignUp(){

    signUpForm.animate(
        [
            {opacity: 0, height: '0',display: 'none',backgroundColor: 'rgba(0,0,0,0.9)',color: 'white'},
            {opacity: 1, height: '2200px',backgroundColor:'rgb(250, 219, 209)',color:'black'}
        ],
        {
            duration: 900,
            easing: 'ease',
            iterations: 1,
            fill: 'forwards'
        }
    )
     signUpForm.style.display= 'flex'
}

    //create header for sign up form
    var signUpFormHeader = document.createElement('div');
    //placement
  signUpForm.appendChild(signUpFormHeader);
    //style
    Object.assign(signUpFormHeader.style,{
        width: '100%',
        height: '180px',
        Color: 'black',
        textAlign: 'center',
        fontSize: '700%',
        // border: 'red solid 1px',
        paddingTop: '23px',
        display: 'flex'

    });

//create things inside header
var header_0 = document.createElement('div');
//style
//placement
signUpFormHeader.appendChild(header_0);
//style
Object.assign(header_0.style,{
    width: '95%',
    height: '100%',
    // border: 'green 1px solid'
});
//innerHTML
header_0.innerHTML= 'Sign Up';

//create x to close sign up form
var signUpFormExit = document.createElement('div');
//placement
signUpFormHeader.appendChild(signUpFormExit);
//style
Object.assign(signUpFormExit.style,{
    width: '5%',
    height: '50px',
    backgroundImage: 'url(../IMG/mobileNavExit.svg)',
    backgroundPosition: 'center',
    backgroundSize: '100%'
});

//on hover signUpFormExit
signUpFormExit.addEventListener('mouseover',function(){
    signUpFormExit.style.cursor = 'pointer'
    signUpFormExit.animate(
        
            [
                {scale : '1'},
                {scale : '1.3'},
                {scale : '1.2'}
            ],
            {
                easing: 'ease-in',
                duration: 500,
                fill: 'forwards'
               
            }
        
    );
});

signUpFormExit.addEventListener('mouseout',function(){
    signUpFormExit.animate(
        
            [
                {scale : '1.2'},
                {scale : '1'}
            ],
            {
                easing: 'ease-in',
                duration: 200,
                fill: 'forwards'
               
            }
        
    );
});

signUpFormExit.onclick = function(){
    signUpForm.animate(
        [
            {opacity: 1, display: 'flex',color: 'black',backgroundColor:'rgb(250, 219, 209)',height: '2200px'},
            {opacity: 0, color: 'white', backgroundColor: 'black',height: '0px'}
        ],
        {
            duration: 200,
            iterations: '1',
            fill: 'forwards'
        }
    )
     signUpForm.style.display = 'none'
}


//signup credential holder
var nameInputHolder = document.createElement('div')
//placement
signUpForm.appendChild(nameInputHolder);
//style
Object.assign(nameInputHolder.style,{
    // border: '1px red solid',
    width: '80%',
    height: '80%',
    margin: 'auto',
    marginTop: '0px',
    display: 'flex',
    flexDirection: 'column'
});

//credentials first name
var signUpName = document.createElement('div');
//placement
nameInputHolder.appendChild(signUpName);
//style
Object.assign(signUpName.style,{
    // border: 'blue solid 1px',
    width: '100%',
    height: '2900px',
    display: 'flex',
    flexDirection: 'column',
    // border: 'blue 1px solid'

});

//first name header
var signUpText_0 = document.createElement('h2');
//placement
signUpName.appendChild(signUpText_0);
//last name header
var signUpText_1 = document.createElement('h2');
//placement
signUpName.appendChild(signUpText_1);

//userName header
var signUpText_2 = document.createElement('h2');
//placement
signUpName.appendChild(signUpText_2);

//email name header
var signUpText_3 = document.createElement('h2');
//placement
signUpName.appendChild(signUpText_3);

//password input header
var signUpText_4 = document.createElement('h2');
//placement
signUpName.appendChild(signUpText_4);
//2nd password insert  
var signUpText_5 = document.createElement('h2');
//placement
signUpName.appendChild(signUpText_5);

//array for sign up headers 
var signUpHeaderArray= [signUpText_0,signUpText_1,signUpText_2,signUpText_3,signUpText_4,signUpText_5]

//style
signUpHeaderArray.forEach(signUpHeaderBoi => {
    Object.assign(signUpHeaderBoi.style,{
        width: '500px',
        height: '120px',
        // border: 'red solid 1px',
        display: 'flex',
        flexDirection: 'column'
    });
});

//create array of header text
var signUpHeaderText = ['First Name','Last Name','User Name','Email Address','Password','Confrim Password']
//for loop for sign up header text
for(let i = 0; i <signUpHeaderText.length; i++){
    signUpHeaderArray[i].innerHTML = signUpHeaderText[i];
}


//first name input
var signUp_0 = document.createElement('input');
//type
signUp_0.type = 'text';
//id
signUp_0.id = 'firstName'

//last name input
var signUp_1 = document.createElement('input');
//type
signUp_1.type = 'text';
//id
signUp_1.id = 'lastName'

//username input
var signUp_2 = document.createElement('input');
//type
signUp_2.type = 'text';
//id
signUp_2.id = 'userName';

//email input
var signUp_3 = document.createElement('input');
//type
signUp_3.type = 'email';
//id
signUp_3.id = 'email';

//password input
var signUp_4 = document.createElement('input');
//type
signUp_4.type = 'password';
//id
signUp_4.id = 'password';

//password confirm input
var signUp_5 = document.createElement('input');
//type
signUp_5.type = 'password';
//id
signUp_5.id = 'passwordConfirm';

//signup Array
var signUpInputArray = [signUp_0,signUp_1,signUp_2,signUp_3,signUp_4,signUp_5];
//for loop to append and style
for(let i = 0; i < signUpInputArray.length; i++){
    signUpHeaderArray[i].appendChild(signUpInputArray[i]);
}
//style 
signUpInputArray.forEach(signUpInputBoi =>{
    Object.assign(signUpInputBoi.style,{
        width: '420px',
        height: '33px',
        borderRadius: '12px',
        border: '1px solid transparent',
        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, 0.1)',
        paddingLeft: '23px',
        fontSize: '20px',
        margin: 'auto',
        marginBottom: '12px'

    });
});

//sign up benefits 
var signUpDesc = document.createElement('div');
//placement
signUpName.appendChild(signUpDesc);
//style
Object.assign(signUpDesc.style,{
    width: '100%',
    height: '600px',
    margin: 'auto',
    
});


//sign up image
var signUpImg = document.createElement('div');
//placement
signUpDesc.appendChild(signUpImg);
//style
Object.assign(signUpImg.style,{
    width: '100%',
    height: '600px',
    backgroundImage: 'url(../IMG/signUpImg.png)', 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '23px',
   
});

//black color background
var blackColor = document.createElement('div');
//placement
signUpImg.appendChild(blackColor);
//style
Object.assign(blackColor.style,{
    position: 'absolute',
    width: '80%',
    height: '600px',
    backgroundColor: 'black',
    opacity: '0.45',
     borderRadius: '23px',
     color: 'white'
});

//sign up benifits
var memberDesc = document.createElement('div');
//placement
signUpImg.appendChild(memberDesc);
//style
Object.assign(memberDesc.style,{
    width: '420px',
    height: '320px',
    color: 'white',
    // border: 'red 1px solid',
    margin: 'auto',
    opacity: '1',
    fontSize: '450%',
    position: 'absolute',
    marginLeft: '23px',
    marginTop: '320px'
});


//member sign up description
var guildText = document.createElement('div');
//placement
signUpName.appendChild(guildText);
//style
Object.assign(guildText.style,{
    width: '530px',
    height: '200px',
    border: '1px transparent solid',
    margin: 'auto'
});

//submit
var signUpSubmit = document.createElement('div');
//type
signUpSubmit.type = 'button';
//placement
guildText.appendChild(signUpSubmit);
//style
Object.assign(signUpSubmit.style,{
    width: '200px',
    height: '60px',
    margin: 'auto',
    borderRadius: '33px',
    textAlign: 'center',
    fontSize: '220%',
    paddingTop: '23px',
    borderRadius: '23px',
    marginTop: '23px'

});

signUpSubmit.innerHTML = 'SUBMIT';

//mouseover mouseoff
signUpSubmit.addEventListener('mouseover',function(){
    signUpSubmit.style.color = 'white';
    signUpSubmit.style.backgroundColor = 'black';
    signUpSubmit.style.cursor = 'pointer'
   
});

guildText.addEventListener('mouseout',function(){
    signUpSubmit.style.color = 'black';
    signUpSubmit.style.backgroundColor = 'white';
});

signUpSubmit.onclick = function submitSignUp(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
console.log( firstName,
    lastName,
    userName,
    email,
    password,
    passwordConfirm);
    if(password !== passwordConfirm){
        alert('Passwords do not match!');
        return;
    }
    const userData = {
        firstName,
        lastName,
        userName,
        email,
        password,
        passwordConfirm
    };
nav_0.style.display = 'none';
nav_1.style.display = 'none';
signUpForm.style.display = 'none';
//save user data 
localStorage.setItem(userName,JSON.stringify(userData));
//user name innerHTML
nav_userName.style.display = 'flex';
profile.style.display = 'flex';
userNameText.style.display = 'flex';
userNameText.innerHTML = userName;
userNameDisplay.innerHTML = userName;
avatarPage.style.display = 'flex'
logOut.style.display = 'flex'
updateGuildPoints(guildPoints+100);
alert('signed up!\nYou gained 100 guild points!');

} ;

//logout onclick function
logOut.onclick = function(){
    logOutMessage.style.display = 'flex';
}

noLogOut.onclick = function(){
    logOutMessage.style.display = 'none';  
}

yesLogOut.onclick = function(){
    //logOutMessage display
    logOutMessage.style.display = 'none';  
    //sign up display
    nav_0.style.display = 'flex';
    //login display
    nav_1.style.display = 'flex';
    //username display
    nav_userName.style.display = 'none';
    //logout
    logOut.style.display = 'none';
    //logo background to default
    logo.style.backgroundImage = 'url(../IMG/restaurant_guild_log.webp)'
}

//login onclick
nav_1.onclick = function(){
    loginPage.style.display = 'flex';
};

closeLogin.onclick= function(){
    loginPage.style.display = 'none';
}

loginBtn.onclick = function(){
    const userName = document.getElementById('loginUserName').value;
    const password = document.getElementById('loginPassword').value;

    //data from local storage
    const storedUserData = JSON.parse(localStorage.getItem(userName));

    //validate boi
    if (!storedUserData || storedUserData.password !== password){
        alert('Invalid username or password');
        return;
    }
   
    //update UI function
    updateUILogin();
    userNameText.innerHTML = userName;
    userNameDisplay.innerHTML = userName;
    
}

function updateUILogin() {
    // Hide sign-up and login forms
    nav_0.style.display = 'none';
    nav_1.style.display = 'none';
    loginPage.style.display = 'none';

    // Display user-specific elements
    nav_userName.style.display = 'flex';
    profile.style.display = 'flex';
    userNameText.style.display = 'flex';
    logOut.style.display = 'flex';
    logo.style.backgroundImage = avatarPic;
   
}

//nav view menu on click
nav_2.onclick = function(){
    menuPage.style.display = 'flex';
}

// Function to resetstats
function resetStats() {
    updateOrderedItems(0); 
    updateGiftShopItems(0);
    updateGuildPoints(0);
}

// document.addEventListener('keydown', (event) =>{
//     if(event.key === 'r'){
//         resetStats();
//     }
// });
function discount(){
var coupon = guildPoints/100;
console.log(coupon);
var discount = subTotal - coupon;
discountDisplay.innerHTML = discount;
}
updateCartDisplay();

discount();

//initial check
mediaQueryChange(mediaQuery);

//listen for changes
mediaQuery.addEventListener('change', mediaQueryChange);


