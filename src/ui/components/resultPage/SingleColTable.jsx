import numberHelper from "../../../helpers/numberHelper";

export default function SingleColTable({ label, details = [] }) {
  return (
    <table className="w-full h-fit mb-1.5">
      <thead>
        <tr>
          <th className="border-b-2 p-1" colSpan={2}>
            {label}
          </th>
        </tr>
      </thead>
      <tbody>
        {details.map((e) => (
          <tr key={e.label}>
            <td className="p-1">{e.name}</td>
            <td className="p-1">{numberHelper.parseToString(e.value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
