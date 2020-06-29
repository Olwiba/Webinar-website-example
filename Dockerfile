# Simplified build step
FROM mcr.microsoft.com/powershell

RUN echo 'All built!'
RUN $postParams = @{apiKey: 'EjA63mvyeuilmKMfdHtiPg',version: '1.0.1',ownerName: 'Ollie Bannister',emailAddress: 'ollie@raygun.com',comment: 'Some generic comment',createdAt: 22:35:01Z}
RUN Invoke-WebRequest -Uri https://app.raygun.com/deployments?authToken=p4o1zGcUjOMNDsE3WDv9H0tYV6TSgB4I -Method POST -Body $postParams