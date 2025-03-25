import Image from "next/image";
import Link from "next/link";

export const PipelineStatus: React.FC = () => {
  return (
    <p className="flex gap-2 items-center">
      Pipeline
      <Link href="https://github.com/dere7/mpesa-sdk/actions/workflows/ci-cd.yml">
        <Image
          src="https://github.com/dere7/mpesa-sdk/actions/workflows/ci-cd.yml/badge.svg"
          alt="CI Pipeline"
          width={100}
          height={20}
        />
      </Link>
    </p>
  );
};
