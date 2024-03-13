import { PiMoneyDuotone } from 'react-icons/pi';
import { NumericFormat } from 'react-number-format';

function PrecoInput({ value, onValueChange }) {
   return (
      <label className='input input-bordered flex items-center gap-2 w-48 mb-3'>
         <div>
            <PiMoneyDuotone className='text-accent text-2xl ' />
         </div>
         <NumericFormat
            type='text'
            value={value}
            onValueChange={(values) => {
               const { floatValue } = values;
               onValueChange(floatValue !== undefined ? floatValue : '');
            }}
            thousandSeparator={true} // Separação de milhares
            decimalScale={2} // Duas casas decimais
            fixedDecimalScale={true} // Força duas casas decimais
            prefix={'R$ '} // Prefixo do Real Brasileiro
            className='grow'
            placeholder='Preço'
         />
      </label>
   );
}

export default PrecoInput;
