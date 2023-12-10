import DarkCTA from "@/app/components/global/DarkCTA";
import ApproachHeader from "@/app/components/our-approach/ApproachHeader";
import ClientCollaboration from "@/app/components/our-approach/ClientCollaboration";
import ContinuousImprovement from "@/app/components/our-approach/ContinuousImprovement";
import DeploymentLaunch from "@/app/components/our-approach/DeploymentLaunch";
import OngoingSupportMaintenance from "@/app/components/our-approach/OngoingSupportMaintenance";
import QualityAssurance from "@/app/components/our-approach/QualityAssurance";
import StrategicPlanning from "@/app/components/our-approach/StrategicPlanning";
import UnderstandingYourNeeds from "@/app/components/our-approach/UnderstandingYourNeeds";

export default function Page() {
    return <main>
      <ApproachHeader />
      <UnderstandingYourNeeds />
      <StrategicPlanning />
      <QualityAssurance />
      <DeploymentLaunch />
      <OngoingSupportMaintenance />
      <ContinuousImprovement />
      <ClientCollaboration />
      <DarkCTA />
    </main>
  }