import React from "react";
import { BlobServiceClient } from '@azure/storage-blob';
import { InteractiveBrowserCredential } from '@azure/identity';

export default function Home() {

    const account = "reactspaobostord62738hf";
    const credential = new InteractiveBrowserCredential({
        // You MUST provide a client ID if you have an application configured.
        clientId: "8bf9bf46-aec6-4226-b686-ac7e043e8270",
        // You may provide a tenant ID based on the resource you are trying to access.
        tenantId: "3d49be6f-6e38-404b-bbd4-f61c1a2d25bf",
        // You may provide a redirectUri based on the redirectUri configured in your Microsoft Entra application:
        redirectUri: "http://localhost:5173/home"
    });

    const blobServiceClient = new BlobServiceClient(
        `https://${account}.blob.core.windows.net`,
        credential
    );

    // Create a container
    const containerName = `newcontainer${new Date().getTime()}`;
    const createContainerResponse = blobServiceClient
        .getContainerClient(containerName)
        .create();

    console.log(`Created container ${containerName} successfully`, createContainerResponse.requestId);

    return (
        <div>
            Home
            <div>
                `Created container '${containerName}' successfully`
            </div>
        </div>

    )
}