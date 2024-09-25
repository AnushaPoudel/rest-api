export default function TextInput ({value, onChange, type="string"}){
    return(
        <input
          type={type}
          className="border rounded-lg focus:outline-gray-700 focus:outline-dashed px-2 ml-2 border border-gray-600 "
          value={value}
          onChange={onChange}
        />
    )
}