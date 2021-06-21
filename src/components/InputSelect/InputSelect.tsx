import React, { FC } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
}

interface IInputSelectProps {
  inputProps: IInputProps;
  selectProps: ISelectProps;
  countryCode?: string;
}

const InputSelect: FC<IInputSelectProps> = (props) => {
  const { inputProps, selectProps, countryCode } = props;

  const { label, ...inputRest } = inputProps;
  const { options, ...selectRest } = selectProps;

  return (
    <div className="flex">
      <div className="w-full relative">
        <p className="absolute top-2 text-gray-400 left-4 text-sm">{label}</p>
        <input
          className="border-[1px] border-gray-300 rounded-md rounded-r-none border-r-0 px-4 w-full pt-4 text-purple-900 text-xl h-16"
          {...inputRest}
        />
      </div>
      <div className="flex h-16 w-32 bg-gray-100 rounded-r-md items-center justify-center px-6">
        <img
          src={`https://flagcdn.com/32x24/${countryCode}.png`} // Display the country flag from the country code
          alt={`${countryCode} flag`}
          className="w-5 h-5 rounded-full object-cover md:mr-2"
        />
        <select
          className="bg-gray-100 text-purple-900 text-sm w-16 font-bold"
          {...selectRest}
        >
          {options.map(
            (
              option: any // map from the array of options
            ) => (
              <option value={option} key={option}>
                {option}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};
export default InputSelect;
