import { Filter } from "./Filter";
import { Input } from "./Input";

interface props {
    themeElementBg: string,
    themeInputPlaceholder: string
}
export function Countries({themeElementBg, themeInputPlaceholder}:props) {
    return (
        <section className="my-12 w-full px-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between lg:px-36">
            <Input themeElementBg={themeElementBg} themeInputPlaceholder={themeInputPlaceholder}/>
            <Filter themeElementBg={themeElementBg}/>
        </section>
    );
}