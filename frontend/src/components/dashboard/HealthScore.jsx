import Card from "../dashboard/Card";
import { HeartPulse } from "lucide-react";

export default function HealthScore(){

return(

<Card>

<div className="flex justify-between">

<div>

<p className="text-slate-500">

Overall Health

</p>

<h1 className="text-6xl font-bold mt-2">

82

</h1>

<p className="text-green-600 mt-2">

🟢 Improving

</p>

</div>

<HeartPulse

size={50}

className="text-red-500"

/>

</div>

</Card>

)

}