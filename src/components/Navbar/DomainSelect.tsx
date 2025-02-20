import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";

const DomainSelect = () => {
  return (
    <div>
      <NativeSelectRoot size="xs" variant="plain" width="auto" me="-1">
        <NativeSelectField defaultValue=".com" fontSize="sm">
          <option value=".com">.com</option>
          <option value=".org">.org</option>
          <option value=".net">.net</option>
        </NativeSelectField>
      </NativeSelectRoot>
    </div>
  );
};

export default DomainSelect;
