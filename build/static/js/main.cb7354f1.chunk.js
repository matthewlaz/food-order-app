(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1gAuL",total:"Cart_total__ybm8_",actions:"Cart_actions__3qxj2","button--alt":"Cart_button--alt__3jGmL",button:"Cart_button__t7Eif"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__33DcG",summary:"CartItem_summary__2m0k2",price:"CartItem_price__kn0nv",amount:"CartItem_amount__2_GAT",actions:"CartItem_actions__290fz"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__fciIV",icon:"HeaderCartButton_icon__JunmX",badge:"HeaderCartButton_badge__3LZ88",bump:"HeaderCartButton_bump__36UZ6"}},,function(e,t,n){e.exports={meal:"MealItem_meal__F4Kt0",description:"MealItem_description__2kGOQ",price:"MealItem_price__15Gdm"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2H2As",modal:"Modal_modal__3CQYL","slide-down":"Modal_slide-down__1FYtC"}},,function(e,t,n){e.exports={header:"Header_header__2meTW","main-image":"Header_main-image__kkKJu"}},,function(e,t,n){e.exports={meals:"AvailableMeals_meals__30JTy","meals-appear":"AvailableMeals_meals-appear__3VqpA"}},function(e,t,n){e.exports={card:"Card_card__1QRIF"}},function(e,t,n){e.exports={input:"Input_input__sSVB-"}},function(e,t,n){e.exports={form:"MealItemForm_form__IHrGd"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2MIyJ"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(8),l=n.n(o),m=n(0),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(d),o=s.items,j=o.reduce((function(e,t){return e+t.amount}),0),b="".concat(l.a.button," ").concat(a?l.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(m.jsxs)("button",{className:b,onClick:e.onClick,children:[Object(m.jsx)("span",{className:l.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:l.a.badge,children:j})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(13),O=n.n(x),p=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:O.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(j,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:O.a["main-image"],children:Object(m.jsx)("img",{src:b,alt:"a table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=n(16),v=n.n(f),C=function(e){return Object(m.jsx)("div",{className:v.a.card,children:e.children})},g=n(2),A=n(17),N=n.n(A),y=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:N.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(g.a)({ref:t},e.input))]})})),I=n(18),k=n.n(I),M=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=+s.current.value;0===n.length||n<1||n>5?c(!1):e.onAddToCart(n)},children:[Object(m.jsx)(y,{label:"Amount",ref:s,input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},w=n(10),H=n.n(w),F=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:H.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:H.a.description,children:e.description}),Object(m.jsx)("div",{className:H.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(M,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],S=function(){var e=B.map((function(e){return Object(m.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:_.a.meals,children:Object(m.jsx)(C,{children:Object(m.jsx)("ul",{children:e})})})},R=n(19),T=n.n(R),D=function(){return Object(m.jsxs)("section",{className:T.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},E=function(){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)(D,{}),Object(m.jsx)(S,{})]})},G=n(4),J=n.n(G),V=n(11),z=n.n(V),L=function(e){return Object(m.jsx)("div",{onClick:e.onClose,className:z.a.backdrop})},P=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("div",{className:z.a.content,children:e.children})})},Y=document.getElementById("overlays"),q=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[c.a.createPortal(Object(m.jsx)(L,{onClose:e.onClose}),Y),c.a.createPortal(Object(m.jsx)(P,{children:e.children}),Y)]})},Q=n(5),$=n.n(Q),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:$.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:$.a.summary,children:[Object(m.jsx)("span",{className:$.a.price,children:t}),Object(m.jsxs)("span",{className:$.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:$.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(g.a)(Object(g.a)({},e),{},{amount:1}))},s=Object(m.jsxs)("ul",{className:J.a["cart-items"],children:[t.items.map((function(e){return Object(m.jsx)(K,{name:e.name,price:e.price,amount:e.amount,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))," "]});return Object(m.jsxs)(q,{onClose:e.onClose,children:[s,Object(m.jsxs)("div",{className:J.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:J.a.actions,children:[Object(m.jsx)("button",{className:J.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(m.jsx)("button",{className:J.a.button,children:"Order"})]})]})},U=n(14),W={items:[],totalAmount:0},X=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(g.a)(Object(g.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(U.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(g.a)(Object(g.a)({},l),{},{amount:l.amount-1});(s=Object(U.a)(e.items))[o]=u}return{items:s,totalAmount:m}}return W},ee=function(e){var t=Object(r.useReducer)(X,W),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(m.jsx)(d.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[n&&Object(m.jsx)(Z,{onClose:function(){a(!1)}}),Object(m.jsx)(p,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(E,{})})]})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.cb7354f1.chunk.js.map