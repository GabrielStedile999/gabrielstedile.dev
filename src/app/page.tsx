import { HomePage } from "@/components/HomePage";
import { getDict } from "@/i18n";

export default function Home() {
  return <HomePage dict={getDict("en")} />;
}
