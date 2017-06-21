// import {Subscribed} from '../Subscribed/Subscribed';
// import {Provides} from "../Provides/Provides";
// import {Uses} from "../Uses/Uses";

export class User
{
        userId : number;
        firstName :string;
        lastName :string;
        telephone  :string;
        mail :string;
        userPassword  :string;
        userTypeId : number;
        genderId: number;
        dateOfBirth : string; // can be null
        dateOfRegistration : string;
        street  :string;
        city  :string;
        streetNumber  :string;
        cardNumber : string;
        checked: boolean;
        // provides: Array<Provides>;
        // subscribed:  Array<Subscribed>;
        // uses: Array<Uses>;

        constructor(userId:number,firstName :string,
  lastName :string,
  telephone  :string,
  mail :string,
  userPassword  :string,
  userTypeId : number,
  genderId: number,
  dateOfBirth : string, // can be null
  dateOfRegistration : string,
  cardNumber : string,
  street  :string,
  city  :string,
  streetNumber  :string,
  checked: boolean
  
//   provides: Array<Provides>,
//   subscribed: Array<Subscribed>,
//   uses: Array<Uses>
)
        {
          this.userId = userId;
          this.firstName = firstName;
          this.lastName = lastName;
          this.telephone = telephone;
          this.mail = mail;
          this.userPassword = userPassword;
          this.userTypeId = userTypeId;
          this.genderId = genderId;
          this.dateOfBirth = dateOfBirth;
          this.dateOfRegistration = dateOfRegistration;
          this.street = street;
          this.city = city;
          this.streetNumber = streetNumber;
          this.cardNumber = cardNumber;
          this.checked = checked;
        //   this.provides = provides;
        //   this.subscribed = subscribed;
        //   this.uses = uses;
    }
}